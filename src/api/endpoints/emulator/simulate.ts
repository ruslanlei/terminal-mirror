import { post } from '@/api';
import { Pair } from '@/api/types/pair';
import { Candle } from '@/api/types/marketData';
import { Order } from '@/api/types/order';

export interface SimulateDTO {
  pair: Pair['id'],
  date_from: string,
  candle_size: number,
  compression: number,
  tiks: number,
}

export interface SimulateResponse {
  candles: Candle[],
  events: Order[]
}

export const simulate = (dto: SimulateDTO) => post<SimulateResponse>('/trading/simulate', dto);
