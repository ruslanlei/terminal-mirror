import { OrderModel } from '@/hooks/useOrderCreate';
import { ComputedRef, InjectionKey, Ref } from 'vue';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { TakeProfit } from '@/stores/market';

export type OrderFormTab = 'input' | 'tp' | 'sl' | 'slx';

export interface OrderFormProvide {
  model: OrderModel,
  takeProfits: Ref<TakeProfit[]>,
  takeProfitsIncomeSum: ComputedRef<number>,
  isTakeProfitsEnabled: Ref<boolean>,
  quoteCurrency: ComputedRef<QuoteCurrency>,
  baseCurrency: ComputedRef<BaseCurrency>,
  maxTakeProfits: number,
  takeProfitsAmount: Ref<number>,
  isStopLossEnabled: Ref<boolean>,
  stopLossPrice: Ref<number>,
  stopLossRisk: ComputedRef<number>,
  pledge: ComputedRef<number>,
  liquidationPrice: ComputedRef<number>,
  maxBaseCurrencyDepositLeveraged: ComputedRef<number>,
}

export const OrderFormInjectionKey: InjectionKey<OrderFormProvide> = Symbol('OrderForm');
