import { Time } from 'lightweight-charts';
import { toSecondsTimestamp } from '@terminal/common';
import { AbstractCandleChartEngineProps } from '@/components/core/candleChart/engines';
import { ChartCandle } from '@/components/core/candleChart';

export interface TradingViewCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: Time,
}

export interface TradingViewProps extends AbstractCandleChartEngineProps {
  candles: ChartCandle[]
}

export const transformChartCandlesToTradingViewCandles = (
  candles: ChartCandle[],
): TradingViewCandle[] => candles.map(
  (candle: ChartCandle) => ({
    open: candle[0],
    high: candle[1],
    low: candle[2],
    close: candle[3],
    time: toSecondsTimestamp(candle[6]) as Time,
  }),
);

export const transformTradingViewCandlesToChartCandles = (
  candles: TradingViewCandle[],
): ChartCandle[] => candles.map(
  (candle: TradingViewCandle) => ([
    candle.open,
    candle.high,
    candle.low,
    candle.close,
    0,
    0,
    new Date(candle.time).toISOString() as string,
  ]),
);
