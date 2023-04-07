import { BarChartData, ValueLabelFormatter } from '@/components/core/barChart/createBarChart';

export interface BarChartProps {
  data: BarChartData,
  barLabelFormatter?: ValueLabelFormatter,
}
