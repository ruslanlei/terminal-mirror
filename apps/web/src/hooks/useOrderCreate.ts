import {
  ref,
  computed,
  reactive,
  watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { number, object, string } from 'yup';
import { SelectorProps } from '@terminal/uikit/components/selector';
import { compose } from '@terminal/common/utils/fp';
import { multiply, roundToDecimalPlaces } from '@terminal/common/utils/number';
import { CreateOrderDTO } from '@/api/endpoints/orders/create';
import { useMarketStore } from '@/stores/market';
import { useModelReset } from '@/hooks/useModelReset';
import {
  spreadOrderQuantityBetweenTakeProfits,
  mapTakeProfitPricesByIncreasePercent,
  mapTakeProfitPricesByDecreasePercent,
} from '@terminal/common/helpers/math/formulas/takeProfit';
import { addPercents, subtractPercents } from '@terminal/common/helpers/math/percents';
import {
  calculateLiquidationPrice,
  calculatePledge,
} from '@terminal/common/helpers/math/formulas/order';
import { useChartDataStore } from '@/stores/chartData';
import { TakeProfit } from '@terminal/common/types/order';
import { arrayOf } from '@terminal/common/utils/array';
import { useEmulatorStore } from '@/stores/emulator';
import { Maybe } from '@terminal/common/utils/functors';
import { isLessThanLeft } from '@terminal/common/utils/boolean';

export interface OrderModel extends CreateOrderDTO {
  leverage: number,
}

export const useOrderCreate = () => {
  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
    baseCurrencyDecimals,
    baseCurrencyStep,
    quoteCurrencyDecimals,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const {
    currentPrice,
    isFetchingCandles,
  } = storeToRefs(chartDataStore);

  const emulatorStore = useEmulatorStore();

  const { t } = useI18n();

  const orderDirectionOptions = computed<SelectorProps['options']>(() => [
    {
      label: t('order.direction.long'),
      value: 'buy',
      ghostState: 'successBackground',
      icon: 'trendingUp',
    },
    {
      label: t('order.direction.short'),
      value: 'sell',
      ghostState: 'dangerBackground',
      icon: 'trendingDown',
    },
  ]);

  const model = reactive<OrderModel>({
    pair: marketStore.activePair,
    side: 'buy',
    order_type: 'limit',
    quantity: 0,
    price: 0,
    leverage: 1,
  });
  const { resetModel: resetModelToInitialValue } = useModelReset(model);

  const resetModel = () => {
    resetModelToInitialValue();
    model.price = chartDataStore.currentPrice || 0;
  };

  const orderSide = computed(() => model.side);

  const setPairPriceToModel = () => {
    model.price = currentPrice.value || 0;
  };

  const price = computed(() => model.price);

  const leverage = computed(() => model.leverage);

  const validationSchema = object().shape({
    pair: number().required(() => t('validationError.required')),
    side: string()
      .required(() => t('validationError.required'))
      .oneOf(['buy', 'sell']),
    quantity: number().min(
      0.000001,
      () => t('validationError.min', { min: 0.000001 }),
    ),
    price: number().positive(() => t('validationError.positive')),
    leverage: number().min(1).max(20),
  });

  // take profits
  const isTakeProfitsEnabled = ref<boolean>(true);

  const maxTakeProfits = 20;

  const takeProfitsAmount = ref(1);

  const takeProfits = ref<TakeProfit[]>([]);

  const EACH_TAKE_PROFIT_PERCENT_INCREASE = 0.5;

  const autoCalculateTakeProfitPrices = () => {
    takeProfits.value = (
      model.side === 'buy'
        ? mapTakeProfitPricesByIncreasePercent
        : mapTakeProfitPricesByDecreasePercent
    )(
      EACH_TAKE_PROFIT_PERCENT_INCREASE,
      model.price,
      takeProfits.value,
    );
  };
  watch(
    [
      () => model.price,
      () => model.side,
    ],
    autoCalculateTakeProfitPrices,
    { deep: true },
  );

  const autoCalculateTakeProfitAmounts = () => {
    console.log(takeProfits.value);

    takeProfits.value = spreadOrderQuantityBetweenTakeProfits(
      model.quantity,
      takeProfits.value,
    );
  };
  watch(
    [() => model.quantity, price],
    autoCalculateTakeProfitAmounts,
    { deep: true },
  );

  const initTakeProfits = (
    orderSide: 'buy' | 'sell',
    percentOfIncrease: number,
    orderPrice: number,
    orderQuantity: number,
    amount: number,
  ) => compose(
    spreadOrderQuantityBetweenTakeProfits(orderQuantity),
    (orderSide === 'buy'
      ? mapTakeProfitPricesByIncreasePercent
      : mapTakeProfitPricesByDecreasePercent
    )(percentOfIncrease, orderPrice),
    arrayOf(() => ({
      price: 0,
      quantity: 0,
    })),
  )(amount);

  const autoCalculateTakeProfits = () => {
    takeProfits.value = initTakeProfits(
      orderSide.value,
      EACH_TAKE_PROFIT_PERCENT_INCREASE,
      model.price,
      model.quantity,
      takeProfitsAmount.value,
    );
  };
  autoCalculateTakeProfits();

  // stop loss
  const isStopLossEnabled = ref(true);

  const stopLossPrice = ref(0);

  const STOP_LOSS_DEFAULT_PERCENT = 10;

  const autoCalculateStopLoss = () => {
    stopLossPrice.value = (
      orderSide.value === 'buy'
        ? subtractPercents
        : addPercents
    )(
      model.price,
      STOP_LOSS_DEFAULT_PERCENT,
    );
  };
  watch([orderSide], autoCalculateStopLoss, { immediate: true });

  watch(() => model.price, () => {
    const needRecalculate = model.side === 'buy'
      ? (model.price < stopLossPrice.value)
      : (model.price > stopLossPrice.value);

    if (!needRecalculate) return;

    autoCalculateStopLoss();
  });

  const calculatePledgeLocal = (
    price: number,
    quantity: number,
    leverage: number,
  ) => Maybe
    .of((leverage > 1) || null)
    .map(() => compose(
      roundToDecimalPlaces(2),
      calculatePledge,
    )(price, quantity, leverage))
    .getOrElse(0);

  const pledge = computed(() => (
    calculatePledgeLocal(
      model.price,
      model.quantity,
      model.leverage,
    )
  ));

  const calculateLiquidationPriceLocal = (
    price: number,
    quantity: number,
    leverage: number,
    balance: number,
  ) => {
    const isLiquidationPriceActive = (
      isLessThanLeft(multiply(price, quantity), balance) && (leverage > 1)
    );

    return isLiquidationPriceActive
      ? compose(
        roundToDecimalPlaces(2),
        calculateLiquidationPrice,
      )(price, quantity, leverage, balance)
      : 0;
  };

  const liquidationPrice = computed(() => (
    calculateLiquidationPriceLocal(
      model.price,
      model.quantity,
      model.leverage,
      emulatorStore.balance,
    )
  ));

  // submit
  const isLoading = ref(false);

  const handleSubmit = async () => {
    if (isLoading.value) return;

    isLoading.value = true;

    const { result } = await marketStore.createOrderGroup(
      model,
      takeProfits.value,
      stopLossPrice.value,
    );

    isLoading.value = false;

    if (result) {
      resetModel();
    }
  };

  watch(activePair, () => {
    if (isFetchingCandles.value) {
      const unwatch = watch(isFetchingCandles, () => {
        unwatch();
        setPairPriceToModel();
        autoCalculateStopLoss();
        autoCalculateTakeProfits();
      });

      return;
    }

    setPairPriceToModel();
    autoCalculateStopLoss();
    autoCalculateTakeProfits();
  }, { immediate: true });

  return {
    model,
    orderSide,
    validationSchema,
    isTakeProfitsEnabled,
    takeProfits,
    orderDirectionOptions,
    activePairData,
    quoteCurrencyDecimals,
    baseCurrencyDecimals,
    baseCurrencyStep,
    price,
    leverage,

    maxTakeProfits,
    takeProfitsAmount,
    autoCalculateTakeProfits,
    isStopLossEnabled,
    stopLossPrice,
    pledge,
    liquidationPrice,
    isLoading,
    handleSubmit,
  };
};
