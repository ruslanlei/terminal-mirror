import { BarChartData, LabelFormatter } from './createBarChart';

export { default as UiBarChart } from './BarChart.vue';

export interface BarChartProps {
  data: BarChartData,
  barLabelFormatter?: LabelFormatter,
  xAxisLabelFormatter?: LabelFormatter,
}
