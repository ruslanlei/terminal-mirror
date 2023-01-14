import { OrderModel } from '@/hooks/useOrderCreate';
import { ComputedRef, InjectionKey, Ref } from 'vue';
import { TakeProfit } from '@/components/app/takeProfitList';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';

export type OrderFormTab = 'input' | 'tp' | 'sl' | 'slx';

export interface OrderFormProvide {
  model: OrderModel,
  takeProfits: Ref<TakeProfit[]>,
  isTakeProfitsEnabled: Ref<boolean>,
  quoteCurrency: ComputedRef<QuoteCurrency>,
  baseCurrency: ComputedRef<BaseCurrency>,
  maxTakeProfits: number,
  takeProfitsAmount: Ref<number>,
  isStopLossEnabled: Ref<boolean>,
  stopLossPrice: Ref<number>,
}

export const OrderFormInjectionKey: InjectionKey<OrderFormProvide> = Symbol('OrderForm');
