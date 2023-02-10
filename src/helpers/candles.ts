import { Candle } from '@/api/types/marketData';
import { ChartCandle } from '@/components/core/chart';
import { toTimestamp } from '@/utils/date';
import { compose } from '@/utils/fp';
import { concat, filterNoneUniqueByKey } from '@/utils/array';

export const transformCandlesForChart = (
  candles: Candle[],
): ChartCandle[] => candles.map((candle: Candle) => ({
  open: candle[0],
  high: candle[1],
  low: candle[2],
  close: candle[3],
  time: toTimestamp(candle[6]),
}));

export const mixCandles = (
  candles: Candle[],
  newCandles: Candle[],
) => compose(
  filterNoneUniqueByKey(6), // element with 6 index in array is iso date of candle,
)(
  concat(
    candles,
    newCandles,
  ),
);
