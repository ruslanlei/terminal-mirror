import { toSecondsTimestamp } from '@terminal/common/utils/date';
import { ChartCandle } from '@/components/core/candleChart';

export interface DxChartCandle {
    hi: number,
    open: number,
    close: number,
    lo: number,
    volume?: number,
    timestamp: number,
}

export interface DxChartProps {
    candles: ChartCandle[]
}

export const transformChartCandleToDxChartCandle = (candle: ChartCandle) => ({
  open: candle[0],
  hi: candle[1],
  lo: candle[2],
  close: candle[3],
  timestamp: toSecondsTimestamp(candle[6]) as number,
});

export const transformChartCandlesToDxChartCandles = (
  candles: ChartCandle[],
): DxChartCandle[] => candles.map(transformChartCandleToDxChartCandle);
