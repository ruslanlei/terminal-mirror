import { defineHookInject } from '@terminal/uikit/utils/vue';
import { useOrderCreate } from '@/hooks/useOrderCreate';

export type OrderFormTab = 'input' | 'tp' | 'sl' | 'slx';

export const OrderFormInjectionKey = Symbol('OrderForm');

export const injectOrderFormState = defineHookInject(
  OrderFormInjectionKey,
  useOrderCreate,
);
