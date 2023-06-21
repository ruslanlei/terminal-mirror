import { AbstractCandleChartEngineProps } from '@/components/core/candleChart/engines';
import { Time } from 'lightweight-charts';

export interface TradingViewCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: Time,
}

export interface TradingViewProps extends AbstractCandleChartEngineProps {
  candles: TradingViewCandle[]
}
