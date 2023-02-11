import { post } from '@/api';
import { Candle } from '@/api/types/marketData';

export interface GetCandlesDTO {
  pair: string,
  date_from: string,
  date_to: string,
  size: number
}

export interface GetCandlesResponse extends GetCandlesDTO {
  data: Candle[],
}

export const getCandles = (
  payload: GetCandlesDTO,
) => post<GetCandlesResponse>('/marketdata/candles', payload);
