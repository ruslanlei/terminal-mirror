import { computed, ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Subject } from 'rxjs';
import { Pair } from '@/api/types/pair';
import { useToastStore } from '@/stores/toasts';
import { modalType, useModalStore } from '@/stores/modals';
import { Order, StopLoss, TakeProfit } from '@/api/types/order';
import { processServerErrors, requestMany } from '@/api/common';
import { getOrdersList } from '@/api/endpoints/orders/getList';
import { filter, flatten, map } from '@/utils/array';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';
import { OrderModel } from '@/hooks/useOrderCreate';
import { deleteOrder } from '@/api/endpoints/orders/delete';
import { closeOrder } from '@/api/endpoints/orders/cancel';
import { compose } from '@/utils/fp';
import { getBalance } from '@/api/endpoints/profile/getBalance';

export const useOrders = (
  activePair: Ref<Pair['id']>,
) => {
  const { t } = useI18n();
  const toastStore = useToastStore();
  const modalStore = useModalStore();

  // active orders
  const activeOrders = ref<Order[]>([]);

  const isActiveOrdersFetched = computed(() => (
    activeOrders.value.length
  ));

  const isActiveOrdersForCurrentPairExists = computed(
    () => activeOrders.value.some((order: Order) => order.pair === activePair.value),
  );

  const getActiveOrdersList = async () => {
    const response = await requestMany<Order[][]>([
      getOrdersList('new'),
      getOrdersList('filled'),
    ]);

    const executedOrdersResponse = await getOrdersList('executed');

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    } else if (!executedOrdersResponse.result) {
      processServerErrors(executedOrdersResponse.data, t('order.failedToGetList'));
    }

    const filteredExecutedOrders = filter(
      (order: Order) => order.order_type === 'tp',
      executedOrdersResponse.data,
    );

    activeOrders.value = flatten([...response.data, ...filteredExecutedOrders]);
  };

  // closed orders
  const closedOrders = ref<Order[]>([]);

  const isClosedOrdersFetched = computed(() => (
    activeOrders.value.length
  ));

  const getClosedOrdersList = async () => {
    const response = await requestMany<Order[][]>([
      getOrdersList('expired'),
      getOrdersList('canceled'),
      getOrdersList('executed'),
      getOrdersList('closed'),
    ]);

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    }

    closedOrders.value = flatten(response.data);
  };

  // create order
  const orderCreatedEventSubject = new Subject<Order>();

  const handleCreateOrder = async (dto: CreateOrderDTO) => {
    const response = await createOrder(dto);

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToCreate'));
    }

    return response;
  };

  const createListOfTakeProfits = async (
    takeProfits: TakeProfit[],
    side: Order['side'],
  ) => {
    const response = await requestMany(
      takeProfits.map((takeProfit: TakeProfit) => createOrder({
        ...takeProfit,
        pair: activePair.value,
        side,
        order_type: 'tp',
      })),
    );

    if (!response.result) {
      toastStore.showDanger({
        text: t('order.failedToCreateTakeProfits'),
      });
    }

    return response;
  };

  const createStopLoss = async (stopLoss: Pick<StopLoss, 'price' | 'quantity'>, side: Order['side']) => {
    const response = await createOrder({
      ...stopLoss,
      pair: activePair.value,
      side,
      order_type: 'sl',
    });

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToCreateStopLoss'));
    }

    return response;
  };

  const subscribeOrderCreated = (
    callback: (order: Order) => void,
  ) => orderCreatedEventSubject.subscribe(callback);

  const emitOrderCreated = (order: Order) => {
    orderCreatedEventSubject.next(order);
  };

  const createOrderGroup = async (
    orderModel: OrderModel,
    takeProfits?: TakeProfit[],
    stopLossPrice?: number,
  ) => {
    const response = await createOrder(orderModel);

    const subOrderSide = orderModel.side === 'buy' ? 'sell' : 'buy';

    if (takeProfits) {
      const response = await createListOfTakeProfits(
        takeProfits,
        subOrderSide,
      );

      if (!response.result) return response;
    }

    if (stopLossPrice) {
      const response = await createStopLoss({
        price: stopLossPrice,
        quantity: orderModel.quantity,
      }, subOrderSide);

      if (!response.result) return response;
    }

    if (response.result) {
      // @ts-ignore
      emitOrderCreated(response.data);
    }

    return response;
  };

  // delete order
  const orderDeleteSubject = new Subject<Order>();

  const subscribeOrderDelete = (
    callback: (order: Order) => any,
  ) => orderDeleteSubject.subscribe(callback);

  const emitOrderDeleteOrClose = (order: Order) => {
    orderDeleteSubject.next(order);
  };

  const handleDeleteOrder = async (
    order: Order,
  ) => {
    const response = await deleteOrder(order.id);

    if (response.result) {
      emitOrderDeleteOrClose({
        ...order,
        status: 'canceled',
      });
    } else {
      processServerErrors(response);
    }

    return response;
  };

  const handleCloseOrder = async (
    order: Order,
  ) => {
    const response = await closeOrder(order.id);

    if (response.result) {
      emitOrderDeleteOrClose({
        ...order,
        status: 'closed',
      });
    } else {
      processServerErrors(response);
    }

    return response;
  };

  const deleteOrCloseAllExistingOrdersForCurrentPair = async () => {
    const activePairActiveOrders = filter(
      (order: Order) => order.pair === activePair.value,
      activeOrders.value,
    );

    const response = await compose(
      requestMany,
      map((order: Order) => (
        order.status === 'new'
          ? handleDeleteOrder(order)
          : handleCloseOrder(order)
      )),
      filter((order: Order) => order.order_type === 'limit'),
    )(activePairActiveOrders);

    if (response.result) {
      await getBalance();
    } else {
      processServerErrors(response.result);
    }

    return response;
  };

  const removeOrder = async (
    order: Order,
  ) => {
    const isOrderFilled = order.status === 'filled';

    const { result, data } = await (
      isOrderFilled
        ? handleCloseOrder
        : handleDeleteOrder
    )(order);

    if (!result) {
      processServerErrors(data);
    }
  };

  const showRemoveOrderModal = (
    order: Order,
    takeProfits: TakeProfit[] | undefined,
  ) => {
    modalStore.showModal({
      type: modalType.DELETE_ORDER,
      payload: {
        order,
        takeProfits,
      },
    });
  };

  return {
    activeOrders,
    isActiveOrdersFetched,
    isActiveOrdersForCurrentPairExists,
    getActiveOrdersList,

    closedOrders,
    isClosedOrdersFetched,
    getClosedOrdersList,

    handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    subscribeOrderCreated,
    emitOrderCreated,
    createOrderGroup,

    subscribeOrderDelete,
    emitOrderDeleteOrClose,
    handleDeleteOrder,
    handleCloseOrder,
    deleteOrCloseAllExistingOrdersForCurrentPair,
    removeOrder,
    showRemoveOrderModal,
  };
};
