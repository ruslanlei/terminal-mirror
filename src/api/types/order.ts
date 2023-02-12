import { PairData } from '@/api/types/pair';

export type OrderStatus = 'new' | 'filled' | 'expired' | 'canceled' | 'executed' | 'closed';

export interface Order {
  id: number,
  user: 0,
  pair: PairData['id'],
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
}

export interface SubOrder extends Order {
  order_type: 'tp' | 'sl',
}

export interface MasterOrder extends Order {
  order_type: 'limit',
}
