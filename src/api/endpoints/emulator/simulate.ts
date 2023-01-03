import { post } from '@/api';
import { Pair } from '@/api/endpoints/marketdata/stats';

export interface SimulateDTO {
  pair: Pair['id'],
  date_from: string,
  candle_size: number,
  compression: number,
  tiks: number,
}

export const simulate = (dto: SimulateDTO) => post('/trading/simulate', dto);
