import { Candle } from '@/api/types/marketData';
import { ChartCandle } from '@/components/core/chart';
import { toISOString, toTimestamp } from '@/utils/date';
import { compose, curry } from '@/utils/fp';
import { concat, filterNoneUniqueByKey } from '@/utils/array';
import { multiply, subtractRight } from '@/helpers/number';

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

export const decreaseDateByAmountOfCandles = curry((
  candleSize: number, // in seconds
  candlesAmount: number,
  date: Date | number | string,
) => compose(
  toISOString,
  subtractRight(
    multiply(
      multiply(candleSize, 1000), // transform candle size from seconds to milliseconds
      candlesAmount,
    ),
  ),
  toTimestamp,
)(date));
