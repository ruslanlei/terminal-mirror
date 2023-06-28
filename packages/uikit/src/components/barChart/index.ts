import { BarChartData, LabelFormatter } from './createBarChart';

export { default as UiBarChart } from '@/components/barChart/BarChart.vue';

export interface BarChartProps {
  data: BarChartData,
  barLabelFormatter?: LabelFormatter,
  xAxisLabelFormatter?: LabelFormatter,
}
