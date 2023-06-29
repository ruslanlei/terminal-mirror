export type BarChartDataElement = [string, number];
export type BarChartData = BarChartDataElement[];
export type LabelFormatter = (value: number | string, index: number) => string;
export interface CreateBarChartProps {
    container: HTMLElement;
    data: BarChartData;
    labelGap?: number;
    minWidthPerBar?: number;
    barBorderRadius?: number;
    topMargin?: number;
    barLabelFormatter?: LabelFormatter;
    xAxisLabelFormatter?: LabelFormatter;
    barNameColor?: string;
    positiveBarColor?: string;
    negativeBarColor?: string;
    defaultBarColor?: string;
    height?: number;
}
export declare const createBarChart: ({ container, data, labelGap, minWidthPerBar, barBorderRadius, topMargin, barLabelFormatter, xAxisLabelFormatter, barNameColor, positiveBarColor, negativeBarColor, defaultBarColor, height, }: CreateBarChartProps) => void;
