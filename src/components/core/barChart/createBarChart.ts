import {
  axisBottom,
  max,
  range,
  scaleBand, ScaleLinear,
  scaleLinear,
  select,
  Selection,
} from 'd3';
import {
  multiply, subtract, subtractRight, toAbsolute,
} from '@/utils/number';
import { toCssPxValue } from '@/utils/style';
import { compose } from '@/utils/fp';

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
  barLabelFormatter?: LabelFormatter,
  xAxisLabelFormatter?: LabelFormatter,
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
  labelFormatter,
}: {
  svgContainer: SVGContainer,
  data: BarChartData,
  xScale: any,
  height: number,
  topMargin: number,
  tickFontSize?: number,
  tickColor?: string,
  labelFormatter: LabelFormatter,
}) => {
  const xAxisLabels = data.map(([label]) => label);
  const xAxis = axisBottom(xScale)
    .tickFormat((d, i) => (
      labelFormatter(xAxisLabels[i], i)
    ))
    .tickPadding(10);

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

const createBars = ({
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
  svgContainer: SVGContainer;
  data: BarChartData;
  xScale: any;
  yScale: ScaleLinear<number, number, any>;
  borderRadius: number;
  positiveColor: string;
  negativeColor: string;
  labelGap: number;
  labelFormatter: LabelFormatter;
  nameColor: string;
  barAnimationDuration?: number;
}) => {
  const bars = svgContainer
    .selectChildren<SVGRectElement, number>('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth())
    .attr('height', ([, value]) => (
      Math.max(
        yScale(value),
        20,
      )
    ))
    .attr('x', (d, i) => xScale(i) as number)
    .attr('y', ([, value]) => {
      const [, scaleHeight] = yScale.range();

      const normalizedHeight = Math.max(20, yScale(value));

      return subtract(
        scaleHeight,
        normalizedHeight,
      );
    })
    .attr('rx', borderRadius)
    .attr('ry', borderRadius)
    .attr('fill', ([, value]) => (value >= 0 ? positiveColor : negativeColor));

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

  const labels = svgContainer
    .selectChildren<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text(([, value], index) => labelFormatter(value, index))
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', ([, value]) => {
      const [, scaleHeight] = yScale.range();

      const normalizedHeight = Math.max(20, yScale(value));

      return compose(
        subtractRight(labelGap),
        subtractRight(normalizedHeight),
      )(scaleHeight);
    })
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
  barLabelFormatter = ((value) => value) as LabelFormatter,
  xAxisLabelFormatter = ((value) => value) as LabelFormatter,
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
    .range([topMargin, subtract(height, topMargin)]);

  createXAxis({
    svgContainer,
    xScale,
    height,
    topMargin,
    data,
    labelFormatter: xAxisLabelFormatter,
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
