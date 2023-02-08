import { Candle } from '@/api/types/marketData';
import { ChartCandle } from '@/components/core/chart';
import { toTimestamp } from '@/utils/date';

export const transformCandlesForChart = (
  candles: Candle[],
): ChartCandle[] => candles.map((candle: Candle) => ({
  high: candle[0],
  open: candle[1],
  close: candle[2],
  low: candle[3],
  time: toTimestamp(candle[6]),
}));
