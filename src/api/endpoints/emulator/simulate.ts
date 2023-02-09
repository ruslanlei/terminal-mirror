import { post } from '@/api';
import { PairServerData } from '@/api/types/pairServerData';
import { Candle } from '@/api/types/marketData';
import { Order } from '@/api/types/order';

export interface SimulateDTO {
  pair: PairServerData['id'],
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
