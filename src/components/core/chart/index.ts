// { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }

export interface ChartCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: number,
}
export interface ChartProps {
  isLoading: boolean,
  data: any[],
}
