import {
  ref,
  computed,
  inject,
} from 'vue';
import { currency } from '@/api/types/currency';
import { OrderFormInjectionKey, OrderFormProvide } from '@/components/app/orderForm';

export const useOrderFormInject = (): OrderFormProvide => inject<OrderFormProvide>(
  OrderFormInjectionKey,
  {
    model: {
      pair: 0,
      side: 'buy',
      order_type: 'limit',
      quantity: 0,
      price: 21000,
      leverage: 1,
    },
    takeProfits: ref([]),
    isTakeProfitsEnabled: ref(false),
    quoteCurrency: computed(() => ({
      name: currency.USDT,
      balance: 0,
      decimals: 2,
      step: 0.01,
      leverage: 1,
    })),
    baseCurrency: computed(() => ({
      name: currency.BTC,
      price: 20000,
      decimals: 3,
      step: 0.001,
    })),
    maxTakeProfits: computed(() => 5),
    takeProfitsAmount: ref(5),
    isStopLossEnabled: ref(false),
    stopLossPrice: ref(19000),
  },
);