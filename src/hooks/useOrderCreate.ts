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
import { useToastStore } from '@/stores/toasts';
import { useModelReset } from '@/hooks/useModelReset';
import {
  spreadOrderQuantityBetweenTakeProfits,
  mapTakeProfitPricesByIncreasePercent,
  reduceTakeProfitsToAmountOfProfitAndRound,
} from '@/math/formulas/takeProfit';
import { arrayOf, compose } from '@/utils/fp';
import { decreaseByPercent } from '@/math/helpers/percents';
import {
  calculateAndRoundLiquidationPrice,
  calculateAndRoundPledge,
} from '@/math/formulas/order';
import { calculateAndRoundStopLossRisk } from '@/math/formulas/stopLoss';

export interface OrderModel extends CreateOrderDTO {
  leverage: number,
}

export const useOrderCreate = () => {
  const marketStore = useMarketStore();
  const toastStore = useToastStore();

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
  const { resetModel } = useModelReset(model);

  const quoteCurrency = computed<QuoteCurrency>(() => ({
    name: marketStore.activePairData?.quote || currency.USDT,
    balance: 178299,
    decimals: 2,
    step: 0.01,
    leverage: model.leverage,
  }));

  const baseCurrency = computed<BaseCurrency>(() => ({
    name: marketStore.activePairData?.base || currency.BTC,
    decimals: 3,
    step: 0.001,
    price: model.price,
  }));

  const validationSchema = object().shape({
    pair: number().required(() => t('validationError.required')),
    side: string()
      .required(() => t('validationError.required'))
      .oneOf(['buy', 'sell']),
    quantity: number().min(
      baseCurrency.value.step,
      () => t('validationError.min', { min: baseCurrency.value.step }),
    ),
    price: number().min(
      1,
      () => t('validationError.min', { min: 1 }),
    ),
    leverage: number().min(1).max(20),
  });

  // <-- take profits
  const isTakeProfitsEnabled = ref<boolean>(true);

  const maxTakeProfits = 20;

  const takeProfitsAmount = ref(1);

  const takeProfits = ref<TakeProfit[]>([]);

  const takeProfitsIncomeSum = computed(() => reduceTakeProfitsToAmountOfProfitAndRound(
    quoteCurrency.value.decimals,
    takeProfits.value,
  ));

  const EACH_TAKE_PROFIT_PERCENT_INCREASE = 0.5;

  const autoCalculateTakeProfitPrices = () => {
    takeProfits.value = mapTakeProfitPricesByIncreasePercent(
      EACH_TAKE_PROFIT_PERCENT_INCREASE,
      model.price,
      takeProfits.value,
    );
  };
  watch(
    () => model.price,
    autoCalculateTakeProfitPrices,
    { deep: true },
  );

  const autoCalculateTakeProfitAmounts = () => {
    takeProfits.value = spreadOrderQuantityBetweenTakeProfits(
      model.quantity,
      takeProfits.value,
    );
  };
  watch(
    [() => model.quantity, baseCurrency],
    autoCalculateTakeProfitAmounts,
    { deep: true },
  );

  const initTakeProfits = (
    percentOfIncrease: number,
    orderPrice: number,
    orderQuantity: number,
    amount: number,
  ) => compose(
    spreadOrderQuantityBetweenTakeProfits(orderQuantity),
    mapTakeProfitPricesByIncreasePercent(percentOfIncrease, orderPrice),
    arrayOf(() => ({
      price: 0,
      quantity: 0,
    })),
  )(amount);

  const autoCalculateTakeProfits = () => {
    takeProfits.value = initTakeProfits(
      EACH_TAKE_PROFIT_PERCENT_INCREASE,
      model.price,
      model.quantity,
      takeProfitsAmount.value,
    );
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
    stopLossPrice.value = decreaseByPercent(
      model.price,
      STOP_LOSS_DEFAULT_PERCENT,
    );
  };
  autoCalculateStopLoss();

  const stopLossRisk = computed(
    () => calculateAndRoundStopLossRisk(
      model.price,
      model.quantity,
      stopLossPrice.value,
      quoteCurrency.value.decimals,
    ),
  );

  const pledge = computed(() => calculateAndRoundPledge(
    model.price,
    model.quantity,
    model.leverage,
    quoteCurrency.value.decimals,
  ));

  const liquidationPrice = computed(() => (model.quantity ? calculateAndRoundLiquidationPrice(
    model.price,
    model.quantity,
    model.leverage,
    quoteCurrency.value.decimals,
  ) : 0));

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

    const { result } = await marketStore.createOrder(model);

    if (!result) {
      isLoading.value = false;
      return;
    }

    if (isTakeProfitsEnabled.value) {
      const { result } = await createTakeProfits();

      if (!result) {
        isLoading.value = false;
        return;
      }
    }

    if (isStopLossEnabled.value) {
      const { result } = await createStopLoss();

      if (!result) {
        isLoading.value = false;
        return;
      }
    }

    isLoading.value = false;

    resetModel();

    toastStore.showSuccess({
      text: t('order.successfullyCreated'),
    });
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
    pledge,
    liquidationPrice,
    isLoading,
    handleSubmit,
  };
};
