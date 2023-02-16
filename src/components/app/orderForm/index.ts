import { OrderModel } from '@/hooks/useOrderCreate';
import { ComputedRef, InjectionKey, Ref } from 'vue';
import { TakeProfit } from '@/stores/market';

export type OrderFormTab = 'input' | 'tp' | 'sl' | 'slx';

export interface OrderFormProvide {
  model: OrderModel,
  takeProfits: Ref<TakeProfit[]>,
  takeProfitsIncomeSum: ComputedRef<number>,
  isTakeProfitsEnabled: Ref<boolean>,
  price: Ref<number>,
  leverage: ComputedRef<number>,
  maxTakeProfits: number,
  takeProfitsAmount: Ref<number>,
  isStopLossEnabled: Ref<boolean>,
  stopLossPrice: Ref<number>,
  stopLossRisk: ComputedRef<number>,
  pledge: ComputedRef<number>,
  liquidationPrice: ComputedRef<number>,
  ratio: ComputedRef<string>,
  profitDisplayValue: ComputedRef<string>,
  riskDisplayValue: ComputedRef<string>,
}

export const OrderFormInjectionKey: InjectionKey<OrderFormProvide> = Symbol('OrderForm');
