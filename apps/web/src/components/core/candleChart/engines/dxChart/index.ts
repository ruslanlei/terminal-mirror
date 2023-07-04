import { Time } from 'lightweight-charts';

export interface DxChartCandle {
    hi: number,
    open: number,
    close: number,
    lo: number,
    volume?: number,
    timestamp: Time,
}

export interface DxChartProps {
    candles: DxChartCandle[]
}
