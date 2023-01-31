import { post } from '@/api';
import { PairServerData } from '@/api/types/pairServerData';

export interface SimulateDTO {
  pair: PairServerData['id'],
  date_from: string,
  candle_size: number,
  compression: number,
  tiks: number,
}

export const simulate = (dto: SimulateDTO) => post('/trading/simulate', dto);
