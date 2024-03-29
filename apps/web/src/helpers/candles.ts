import {
  subtractDays,
  toISOString,
  toTimestamp,
} from '@terminal/common/utils/date';
import { compose, curry } from '@terminal/common/utils/fp';
import { concat, filterNoneUniqueByKey, getLastElement } from '@terminal/common/utils/array';
import { multiply, subtractRight } from '@terminal/common/utils/number';
import { isMoreThanLeft } from '@terminal/common/utils/boolean';
import { Candle } from '@/api/types/marketData';

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
    isMoreThanLeft(
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
