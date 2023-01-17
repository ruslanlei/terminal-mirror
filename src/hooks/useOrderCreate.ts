import {
  ref,
  computed,
  reactive,
  watch,
} from 'vue';
import { CreateOrderDTO } from '@/api/endpoints/orders/create';
import { TakeProfit, useMarketStore } from '@/stores/market';
import { SelectorProps } from '@/components/core/selector';
import { useI18n } from 'vue-i18n';
import { number, object, string } from 'yup';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { currency } from '@/api/types/currency';
import { divide } from '@/utils/float';
import { roundToDecimalPoint } from '@/utils/number';
import cloneDeep from 'lodash/cloneDeep';

export type OrderModel = CreateOrderDTO;

export const useOrderCreate = () => {
  const marketStore = useMarketStore();

  const { t } = useI18n();

  const orderDirectionOptions = computed<SelectorProps['options']>(() => [
    {
      label: t('order.direction.long'),
      value: 'buy',
      state: 'success',
      icon: 'trendingUp',
    },
    {
      label: t('order.direction.short'),
      value: 'sell',
      state: 'danger',
      icon: 'trendingDown',
    },
  ]);

  const model = reactive<OrderModel>({
    pair: marketStore.activePair,
    side: 'buy',
    order_type: 'limit',
    quantity: 0,
    price: 16890,
    leverage: 1,
  });
  const baseModel = cloneDeep(model);
  const resetModel = () => {
    Object.assign(model, baseModel);
  };

  const validationSchema = object().shape({
    pair: number().required(() => t('validationError.required')),
    side: string()
      .required(() => t('validationError.required'))
      .oneOf(['buy', 'sell']),
    quantity: number().min(0.001),
    price: number().min(0.001),
    leverage: number().min(1).max(20),
  });

  const quoteCurrency = computed<QuoteCurrency>(() => ({
    name: marketStore.activePairData?.quote || currency.USDT,
    balance: 3208,
    decimals: 2,
    step: 0.01,
    leverage: model.leverage,
  }));

  const baseCurrency = computed<BaseCurrency>(() => ({
    name: marketStore.activePairData?.base || currency.BTC,
    price: model.price,
    decimals: 3,
    step: 0.001,
  }));

  // <-- take profits
  const isTakeProfitsEnabled = ref<boolean>(true);

  const maxTakeProfits = 20;

  const takeProfitsAmount = ref(5);

  const takeProfits = ref<TakeProfit[]>([]);

  const takeProfitsIncomeSum = computed(() => {
    const rawSum = takeProfits.value.reduce(
      (sum: number, takeProfit: TakeProfit) => sum + (takeProfit.price * takeProfit.quantity),
      0,
    );
    return roundToDecimalPoint(rawSum, quoteCurrency.value.decimals);
  });

  const EACH_TAKE_PROFIT_PERCENT_INCREASE = 0.5;

  const percentOfOrderPrice = computed(() => model.price / 100);

  const autoCalculateTakeProfitPrices = () => {
    takeProfits.value = takeProfits.value.map((value, index) => {
      const percentIncrease = EACH_TAKE_PROFIT_PERCENT_INCREASE * (index + 1);
      const increase = percentIncrease * percentOfOrderPrice.value;

      return {
        ...value,
        price: model.price + increase,
      };
    });
  };
  watch(
    () => model.price,
    autoCalculateTakeProfitPrices,
    { deep: true },
  );

  const autoCalculateTakeProfitAmounts = () => {
    const quantity = divide(model.quantity, takeProfitsAmount.value, 6);

    takeProfits.value = takeProfits.value.map((value, index) => ({
      ...value,
      quantity,
    }));
  };
  watch(
    [() => model.quantity, baseCurrency],
    autoCalculateTakeProfitAmounts,
    { deep: true },
  );

  const autoCalculateTakeProfits = () => {
    takeProfits.value = Array(takeProfitsAmount.value).fill(0).map(() => ({
      price: 0,
      quantity: 0,
    }));
    autoCalculateTakeProfitPrices();
    autoCalculateTakeProfitAmounts();
  };
  autoCalculateTakeProfits();

  const createTakeProfits = () => {
    const side = model.side === 'buy' ? 'sell' : 'buy';

    return marketStore.createListOfTakeProfits(
      takeProfits.value,
      side,
    );
  };
  // take profits -->

  // <-- stop loss
  const isStopLossEnabled = ref(true);

  const stopLossPrice = ref(0);

  const STOP_LOSS_DEFAULT_PERCENT = 10;

  const autoCalculateStopLoss = () => {
    const percentOfOrder = model.price / 100;
    stopLossPrice.value = model.price - (percentOfOrder * STOP_LOSS_DEFAULT_PERCENT);
  };
  autoCalculateStopLoss();

  const stopLossRisk = computed(
    () => {
      const riskRaw = (model.price * model.quantity) - (stopLossPrice.value * model.quantity);
      return roundToDecimalPoint(riskRaw, quoteCurrency.value.decimals);
    },
  );

  const createStopLoss = () => {
    const side = model.side === 'buy' ? 'sell' : 'buy';

    return marketStore.createStopLoss({
      price: stopLossPrice.value,
      quantity: model.quantity,
    }, side);
  };
  // stop loss -- >

  // <-- submit
  const isLoading = ref(false);

  const handleSubmit = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    const mainOrderCreateResponse = await marketStore.createOrder(model);

    if (!mainOrderCreateResponse.result) return;

    if (isTakeProfitsEnabled.value) {
      const { result } = await createTakeProfits();

      if (!result) return;
    }

    if (isStopLossEnabled.value) {
      const { result } = await createStopLoss();

      if (!result) return;
    }

    isLoading.value = false;

    resetModel();
  };
  // submit -->

  return {
    model,
    validationSchema,
    isTakeProfitsEnabled,
    takeProfits,
    takeProfitsIncomeSum,
    orderDirectionOptions,
    quoteCurrency,
    baseCurrency,
    maxTakeProfits,
    takeProfitsAmount,
    autoCalculateTakeProfits,
    isStopLossEnabled,
    stopLossPrice,
    stopLossRisk,
    isLoading,
    handleSubmit,
  };
};
