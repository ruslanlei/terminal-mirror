import {
  axisBottom,
  max,
  range,
  scaleBand,
  scaleLinear,
  select,
  Selection,
} from 'd3';
import { toAbsolute } from '@/utils/number';
import { multiply } from '@/helpers/number';
import { toCssClassSelector, toCssPixelValue } from '@/utils/dom';
import { toCssPxValue } from '@/helpers/style';

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
  valueLabelFormatter?: ValueLabelFormatter,
  positiveBarColor?: string,
  negativeBarColor?: string,
}

type SVGContainer = Selection<SVGSVGElement, unknown, null, undefined>;

const X_AXIS_CLASS = 'xAxis';

const createXAxis = (
  svg: SVGContainer,
  data: BarChartData,
  xScale: any,
  height: number,
  topMargin: number,
) => {
  const xAxisLabels = data.map(([label]) => label);
  const xAxis = axisBottom(xScale).tickFormat((d, i) => xAxisLabels[i]).tickPadding(10);

  const xAxisElement = svg
    .append('g')
    .attr('transform', `translate(0, ${height - topMargin})`)
    .attr('class', X_AXIS_CLASS) // FIXME: find better solution for color
    .call(xAxis);

  xAxisElement
    .call((g) => g.style('margin-top', toCssPixelValue(10)));

  // remove line on xAxis
  xAxisElement
    .call((g) => g.select('.domain').remove());

  // remove vertical dashes on xAxis
  xAxisElement
    .call((g) => g.selectAll('line').remove());

  // set styles to xAxis labels
  xAxisElement
    .call(
      (g) => g
        .selectAll('.tick text')
        .style('font-size', '12px')
        .style('color', 'white'),
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
    barBorderRadius,
    positiveBarColor = 'steelblue',
    negativeBarColor = 'red',
    labelGap = 10,
    labelFormatter,
  }: {
    svgContainer: SVGContainer,
    data: BarChartData,
    xScale: any,
    yScale: any,
    barBorderRadius: number,
    positiveBarColor?: string,
    negativeBarColor?: string,
    labelGap?: number,
    labelFormatter: ValueLabelFormatter,
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
    .attr('fill', ([, value]) => (value >= 0 ? positiveBarColor : negativeBarColor))
    .attr('rx', barBorderRadius)
    .attr('ry', barBorderRadius);

  // animate bars
  bars
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - 60)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .attr('y', ([, value]) => yScale(toAbsolute(value)))
    .attr('opacity', 1)
    .delay((d, i) => multiply(data.length - i, 40))
    .ease();

  const labels = svgContainer.selectChildren<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text(([, value]) => labelFormatter(value))
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .style('font-size', '12px')
    .style('text-anchor', 'middle')
    .style('fill', 'white');

  // animate labels
  labels
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap - 300)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .delay((d, i) => multiply(data.length - i, 40))
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
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
  valueLabelFormatter = ((value) => value) as ValueLabelFormatter,
  positiveBarColor,
  negativeBarColor,
}: CreateBarChartProps) => {
  const numBars = data.length;
  const width = Math.max(700, numBars * minWidthPerBar);
  const height = 300;

  const xScale = scaleBand<number>()
    .domain(range(data.length))
    .range([0, width])
    .padding(0.1)
    .paddingInner(0.2);

  const yScale = scaleLinear<number>()
    .domain([0, max(data.map(([, value]) => toAbsolute(value))) as number])
    .range([height - topMargin, topMargin]);

  const svgContainer = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  createXAxis(svgContainer, data, xScale, height, topMargin);

  createBars({
    svgContainer,
    data,
    xScale,
    yScale,
    barBorderRadius,
    positiveBarColor,
    negativeBarColor,
    labelGap,
    labelFormatter: valueLabelFormatter,
  });
};
