import {
  ref,
  computed,
  provide,
  reactive,
  Ref,
  ComputedRef,
} from 'vue';
import { CreateOrderDTO } from '@/api/endpoints/orders/create';
import { useMarketStore } from '@/stores/market';
import { SelectorProps } from '@/components/core/selector';
import { useI18n } from 'vue-i18n';
import { number, object, string } from 'yup';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { currency } from '@/api/types/currency';
import { TakeProfit } from '@/components/app/takeProfitList';

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
  provide<OrderModel>('model', model);

  const validationSchema = object().shape({
    pair: number().required(() => t('validationError.required')),
    side: string()
      .required(() => t('validationError.required'))
      .oneOf(['buy', 'sell']),
    quantity: number().min(0),
    price: number().min(0),
    leverage: number().min(1).max(20),
  });

  const takeProfits = ref<TakeProfit[]>([]);
  provide<Ref<TakeProfit[]>>('takeProfits', takeProfits);

  const quoteCurrency = computed<QuoteCurrency>(() => ({
    name: marketStore.activePairData?.quote || currency.USDT,
    balance: 3208,
    decimals: 2,
    step: 0.01,
    leverage: model.leverage,
  }));
  provide<ComputedRef<QuoteCurrency>>('quoteCurrency', quoteCurrency);

  const baseCurrency = computed<BaseCurrency>(() => ({
    name: marketStore.activePairData?.base || currency.BTC,
    price: model.price,
    decimals: 3,
    step: 0.001,
  }));
  provide<ComputedRef<BaseCurrency>>('baseCurrency', baseCurrency);

  return {
    model,
    validationSchema,
    takeProfits,
    orderDirectionOptions,
    quoteCurrency,
    baseCurrency,
  };
};
