import {
  ref,
  computed,
  reactive,
  watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { number, object, string } from 'yup';
import { CreateOrderDTO } from '@/api/endpoints/orders/create';
import { TakeProfit, useMarketStore } from '@/stores/market';
import { SelectorProps } from '@/components/core/selector';
import { useModelReset } from '@/hooks/useModelReset';
import {
  spreadOrderQuantityBetweenTakeProfits,
  mapTakeProfitPricesByIncreasePercent,
  reduceTakeProfitsToAmountOfProfitAndRound,
} from '@/helpers/math/formulas/takeProfit';
import { arrayOf, compose } from '@/utils/fp';
import { decreaseByPercent } from '@/helpers/math/percents';
import {
  calculateAndRoundLiquidationPrice,
  calculateAndRoundPledge, calculateVolumeDifference,
} from '@/helpers/math/formulas/order';
import { roundToDecimalPoint } from '@/helpers/number';
import { useChartDataStore } from '@/stores/chartData';

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

  const { t } = useI18n();

  const isFormDisabled = computed(() => isFetchingCandles.value);

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
  const { resetModel } = useModelReset(model);

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
      baseCurrencyStep.value,
      () => t('validationError.min', { min: baseCurrencyStep.value }),
    ),
    price: number().positive(() => t('validationError.positive')),
    leverage: number().min(1).max(20),
  });

  // <-- take profits
  const isTakeProfitsEnabled = ref<boolean>(true);

  const maxTakeProfits = 20;

  const takeProfitsAmount = ref(1);

  const takeProfits = ref<TakeProfit[]>([]);

  const takeProfitsIncomeSum = computed(() => reduceTakeProfitsToAmountOfProfitAndRound(
    quoteCurrencyDecimals.value,
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
    [() => model.quantity, price],
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
    () => compose(
      roundToDecimalPoint(quoteCurrencyDecimals.value),
      calculateVolumeDifference,
    )(
      model.quantity,
      model.price,
      stopLossPrice.value,
    ),
  );

  const pledge = computed(() => calculateAndRoundPledge(
    model.price,
    model.quantity,
    model.leverage,
    quoteCurrencyDecimals.value,
  ));

  const liquidationPrice = computed(() => (model.quantity ? calculateAndRoundLiquidationPrice(
    model.price,
    model.quantity,
    model.leverage,
    quoteCurrencyDecimals.value,
  ) : 0));

  // <-- submit
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
  // submit -->

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
    isFormDisabled,
    model,
    validationSchema,
    isTakeProfitsEnabled,
    takeProfits,
    takeProfitsIncomeSum,
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
    stopLossRisk,
    pledge,
    liquidationPrice,
    isLoading,
    handleSubmit,
  };
};
