import { Pair } from './pair';

export type OrderStatus = 'new' | 'filled' | 'expired' | 'canceled' | 'executed' | 'closed';

export interface Order {
  id: number,
  user: 0,
  pair: Pair['id'],
  side: 'buy' | 'sell',
  order_type: 'limit' | 'tp' | 'sl',
  created: string,
  quantity: number,
  price: number,
  leverage?: number,
  status: OrderStatus,
  transaction: number,
  master: number,
  executed_trade_id: number,
  executed_price: number,
  executed_at: string,
  position: number,
  cancelled_trade_id: number,
  canceled_at: string,
  canceled_price: number,
  modified: string,
}

export interface SubOrder extends Order {
  order_type: 'tp' | 'sl',
}

export interface TakeProfit extends Order {
  order_type: 'tp',
}

export interface StopLoss extends Order {
  order_type: 'sl',
}

export interface MasterOrder extends Order {
  order_type: 'limit',
}
