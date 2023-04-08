import { BarChartData, LabelFormatter } from '@/components/core/barChart/createBarChart';

export interface BarChartProps {
  data: BarChartData,
  barLabelFormatter?: LabelFormatter,
  xAxisLabelFormatter?: LabelFormatter,
}
