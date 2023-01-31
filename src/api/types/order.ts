import { PairServerData } from '@/api/types/pairServerData';

export interface Order {
  id: number,
  user: 0,
  pair: PairServerData['id'],
  side: 'buy' | 'sell',
  order_type: 'limit' | 'tp' | 'sl',
  created: string,
  quantity: number,
  price: number,
  leverage?: number,
  status: string,
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
