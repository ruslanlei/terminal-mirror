import { Candle } from '@/api/types/marketData';
import { ChartCandle } from '@/components/core/candleChart';
import {
  subtractDays,
  toISOString,
  toSecondsTimestamp,
  toTimestamp,
} from '@/utils/date';
import { compose, curry } from '@/utils/fp';
import { concat, filterNoneUniqueByKey, getLastElement } from '@/utils/array';
import { multiply, subtractRight } from '@/helpers/number';
import { isMoreThan } from '@/utils/boolean';

export const transformCandlesForChart = (
  candles: Candle[],
): ChartCandle[] => candles.map((candle: Candle) => ({
  open: candle[0],
  high: candle[1],
  low: candle[2],
  close: candle[3],
  time: toSecondsTimestamp(candle[6]),
}));

export const getCandleField = curry((
  field:
    'openPrice'
    | 'lowPrice'
    | 'highPrice'
    | 'closePrice'
    | 'volume'
    | 'amountOfOrders',
  candle: Candle | null | undefined,
) => {
  const fieldIndex = ({
    openPrice: 0,
    lowPrice: 1,
    highPrice: 2,
    closePrice: 3,
    volume: 4,
    amountOfOrders: 5,
  }[field]);

  return candle?.[fieldIndex] as number || null;
});

export const getCandleDate = (
  candle?: Candle | null,
) => candle?.[6] || null;

export const mixCandles = curry((
  candles: Candle[],
  newCandles: Candle[],
) => compose(
  filterNoneUniqueByKey(6), // element with 6 index in array is iso date of candle,
)(
  concat(
    candles,
    newCandles,
  ),
));

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

export const getCandlesWithin24HoursFromLastCandleDate = (
  candles: Candle[],
) => (candles?.length
  ? candles.filter((candle: Candle) => compose(
    isMoreThan(
      compose(
        toTimestamp,
        subtractDays(1),
        getCandleDate,
      )(getLastElement(candles)),
    ),
    toTimestamp,
    getCandleDate,
  )(candle))
  : []);
