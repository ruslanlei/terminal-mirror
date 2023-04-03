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

export type BarChartDataElement = [string, number];
export type BarChartData = BarChartDataElement[];

export interface CreateBarChartProps {
  container: HTMLElement;
  data: BarChartData;
  labelGap?: number;
  minWidthPerBar?: number;
  barBorderRadius?: number;
  topMargin?: number;
}

type SVGContainer = Selection<SVGSVGElement, unknown, null, undefined>;

const createXAxis = (
  svg: SVGContainer,
  data: BarChartData,
  xScale: any,
  height: number,
  topMargin: number,
) => {
  const xAxisLabels = data.map(([label]) => label);
  const xAxis = axisBottom(xScale).tickFormat((d, i) => xAxisLabels[i]);

  const xAxisElement = svg
    .append('g')
    .attr('transform', `translate(0, ${height - topMargin})`)
    .attr('style', 'color: white')
    .call(xAxis);

  // remove line on xAxis
  xAxisElement.select('.domain').attr('stroke', 'none');

  // remove vertical dashes on xAxis
  xAxisElement.selectAll('line').attr('stroke-width', 0);

  // set styles to xAxis labels
  xAxisElement.selectAll('text').style('font-size', '12px');
};

const createBars = (
  svg: SVGContainer,
  data: BarChartData,
  xScale: any,
  yScale: any,
  barBorderRadius: number,
) => {
  const bars = svg.selectAll<SVGRectElement, number>('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i) as number)
    .attr('y', ([, value]) => yScale(toAbsolute(value)))
    .attr('width', xScale.bandwidth())
    .attr('height', ([, value]) => yScale(0) - yScale(toAbsolute(value)))
    .attr('fill', ([, value]) => (value >= 0 ? 'steelblue' : 'red'))
    .attr('rx', barBorderRadius)
    .attr('ry', barBorderRadius);

  return bars;
};

const createBarValueLabels = (
  svg: SVGContainer,
  data: BarChartData,
  xScale: any,
  yScale: any,
  labelGap: number,
) => {
  const barValueLabels = svg.selectAll<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text(([, value]) => value)
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .style('font-size', '12px')
    .style('text-anchor', 'middle')
    .style('fill', 'white');

  return barValueLabels;
};

const animateBarValueLabels = (
  barValueLabels: Selection<SVGTextElement, BarChartDataElement, SVGSVGElement, unknown>,
  data: BarChartData,
  yScale: any,
  labelGap: number,
) => {
  barValueLabels
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap - 300)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .delay((d, i) => multiply(data.length - i, 40))
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .attr('opacity', 1)
    .ease();
};

const animateBars = (
  bars: Selection<SVGTextElement, BarChartDataElement, SVGSVGElement, unknown>,
  data: BarChartData,
  yScale: any,
) => {
  bars
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - 60)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .attr('y', ([, value]) => yScale(toAbsolute(value)))
    .attr('opacity', 1)
    .delay((d, i) => multiply(data.length - i, 40))
    .ease();
};

export const createBarChart = ({
  container,
  data,
  labelGap = 10,
  minWidthPerBar = 50,
  barBorderRadius = 5,
  topMargin = 30,
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

  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const bars = createBars(svg, data, xScale, yScale, barBorderRadius);

  animateBars(bars, data, yScale);

  const barValueLabels = createBarValueLabels(svg, data, xScale, yScale, labelGap);

  createXAxis(svg, data, xScale, height, topMargin);

  animateBarValueLabels(barValueLabels, data, yScale, labelGap);
};
