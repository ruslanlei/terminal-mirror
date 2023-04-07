import {
  axisBottom,
  max,
  range,
  scaleBand,
  scaleLinear,
  select,
  Selection,
} from 'd3';
import { multiply, toAbsolute } from '@/utils/number';
import { toCssPxValue } from '@/utils/style';

export type BarChartDataElement = [string, number];
export type BarChartData = BarChartDataElement[];

type ValueLabelFormatter = (value: number) => number | string;

export interface CreateBarChartProps {
  container: HTMLElement;
  data: BarChartData;
  labelGap?: number;
  minWidthPerBar?: number;
  barBorderRadius?: number;
  topMargin?: number;
  barLabelFormatter?: ValueLabelFormatter,
  barNameColor?: string,
  positiveBarColor?: string,
  negativeBarColor?: string,
  height?: number,
}

type SVGContainer = Selection<SVGSVGElement, unknown, null, undefined>;

const createXAxis = ({
  svgContainer,
  data,
  xScale,
  height,
  topMargin,
  tickFontSize = 12,
  tickColor = 'white',
}: {
  svgContainer: SVGContainer,
  data: BarChartData,
  xScale: any,
  height: number,
  topMargin: number,
  tickFontSize?: number,
  tickColor?: string,
}) => {
  const xAxisLabels = data.map(([label]) => label);
  const xAxis = axisBottom(xScale).tickFormat((d, i) => xAxisLabels[i]).tickPadding(10);

  const xAxisElement = svgContainer
    .append('g')
    .attr('transform', `translate(0, ${height - topMargin})`)
    .call(xAxis);

  // remove line on xAxis
  xAxisElement
    .call((g) => g.select('.domain').remove());

  // remove vertical dashes on xAxis
  xAxisElement
    .call((g) => g.selectAll('g line').remove());

  // set styles to xAxis labels
  xAxisElement
    .call(
      (g) => g
        .selectAll('.tick text')
        .style('font-size', toCssPxValue(tickFontSize))
        .style('font-weight', '500')
        .style('color', tickColor),
    );

  return {
    xAxis,
  };
};

const createBars = (
  {
    svgContainer,
    data,
    xScale,
    yScale,
    borderRadius,
    positiveColor,
    negativeColor,
    labelGap,
    labelFormatter,
    barAnimationDuration = 300,
    nameColor,
  }: {
    svgContainer: SVGContainer,
    data: BarChartData,
    xScale: any,
    yScale: any,
    borderRadius: number,
    positiveColor: string,
    negativeColor: string,
    labelGap: number,
    labelFormatter: ValueLabelFormatter,
    nameColor: string,
    barAnimationDuration?: number,
  },
) => {
  const bars = svgContainer.selectChildren<SVGRectElement, number>('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i) as number)
    .attr('y', ([, value]) => yScale(toAbsolute(value)))
    .attr('width', xScale.bandwidth())
    .attr('height', ([, value]) => yScale(0) - yScale(toAbsolute(value)))
    .attr('fill', ([, value]) => (value >= 0 ? positiveColor : negativeColor))
    .attr('rx', borderRadius)
    .attr('ry', borderRadius);

  // animate bars
  bars
    .attr('opacity', 0)
    .style('transform', 'translateY(-120px)')
    .transition()
    .duration(barAnimationDuration)
    .style('transform', 'translateY(0)')
    .attr('opacity', 1)
    .delay((d, i) => multiply(data.length - i, 20))
    .ease();

  const labels = svgContainer.selectChildren<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text(([, value]) => labelFormatter(value))
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .style('font-size', '12px')
    .style('font-weight', '500')
    .style('text-anchor', 'middle')
    .style('fill', nameColor);

  // animate labels
  labels
    .attr('opacity', 0)
    .style('transform', 'translateY(-300px) scale(0.8)')
    .transition()
    .duration(barAnimationDuration)
    .style('transform', 'translateY(0) scale(1)')
    .delay((d, i) => multiply(data.length - i, 30))
    .attr('opacity', 1)
    .ease();

  return {
    bars,
  };
};

export const createBarChart = ({
  container,
  data,
  labelGap = 10,
  minWidthPerBar = 50,
  barBorderRadius = 5,
  topMargin = 30,
  barLabelFormatter = ((value) => value) as ValueLabelFormatter,
  barNameColor = 'gray',
  positiveBarColor = 'steelblue',
  negativeBarColor = 'red',
  height = 300,
}: CreateBarChartProps) => {
  const numBars = data.length;
  const width = Math.max(700, multiply(numBars, minWidthPerBar));

  const svgContainer = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const xScale = scaleBand<number>()
    .domain(range(data.length))
    .range([0, width])
    .padding(0.1)
    .paddingInner(0.2);

  const yScale = scaleLinear<number>()
    .domain([0, max(data.map(([, value]) => toAbsolute(value))) as number])
    .range([height - topMargin, topMargin]);

  createXAxis({
    svgContainer,
    xScale,
    height,
    topMargin,
    data,
  });

  createBars({
    svgContainer,
    xScale,
    yScale,
    borderRadius: barBorderRadius,
    positiveColor: positiveBarColor,
    negativeColor: negativeBarColor,
    labelGap,
    labelFormatter: barLabelFormatter,
    nameColor: barNameColor,
    data,
  });
};
