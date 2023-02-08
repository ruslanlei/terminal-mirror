import { Candle } from '@/api/types/marketData';
import { ChartCandle } from '@/components/core/chart';
import { toTimestamp } from '@/utils/date';

export const transformCandlesForChart = (
  candles: Candle[],
): ChartCandle[] => candles.map((candle: Candle) => ({
  open: candle[0],
  high: candle[1],
  low: candle[2],
  close: candle[3],
  time: toTimestamp(candle[6]),
}));
