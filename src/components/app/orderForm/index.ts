import { useOrderCreate } from '@/hooks/useOrderCreate';
import { defineHookInject } from '@/utils/vue';

export type OrderFormTab = 'input' | 'tp' | 'sl' | 'slx';

export const OrderFormInjectionKey = Symbol('OrderForm');

export const injectOrderFormState = defineHookInject(
  OrderFormInjectionKey,
  useOrderCreate,
);
