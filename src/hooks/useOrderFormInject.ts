import {
  ref,
  computed,
  inject,
} from 'vue';
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
    takeProfitsIncomeSum: computed(() => 0),
    leverage: computed(() => 0),
    price: ref(0),
    maxTakeProfits: 5,
    takeProfitsAmount: ref(5),
    isStopLossEnabled: ref(false),
    stopLossPrice: ref(19000),
    stopLossRisk: computed(() => 0),
    pledge: computed(() => 0),
    liquidationPrice: computed(() => 0),
    ratio: computed(() => ''),
    riskDisplayValue: computed(() => ''),
  },
);
