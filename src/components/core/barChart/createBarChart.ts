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
  const xAxis = axisBottom(xScale).tickFormat((d, i) => xAxisLabels[i]);

  const xAxisElement = svg
    .append('g')
    .attr('transform', `translate(0, ${height - topMargin})`)
    .attr('style', 'color: white') // FIXME: find better solution for color
    .attr('class', X_AXIS_CLASS) // FIXME: find better solution for color
    .call(xAxis);

  // remove line on xAxis
  xAxisElement.select('.domain').attr('stroke', 'none');

  // remove vertical dashes on xAxis
  xAxisElement.selectAll('line').attr('stroke-width', 0);

  // set styles to xAxis labels
  xAxisElement.selectAll('text').style('font-size', '12px');

  return {
    xAxis,
  };
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

const BAR_LABEL_CLASS = 'barLabel';

const createBarValueLabels = (
  svg: SVGContainer,
  data: BarChartData,
  xScale: any,
  yScale: any,
  labelGap: number,
  formatter: ValueLabelFormatter,
) => {
  const barValueLabels = svg.selectAll<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text(([, value]) => formatter(value))
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .attr('class', BAR_LABEL_CLASS)
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
  bars: Selection<SVGRectElement, BarChartDataElement, SVGSVGElement, unknown>,
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

// TODO: Complete. Not working now
export const updateBarChart = (
  svg: any,
  data: BarChartData,
  xScale: any,
  xAxis: any,
  yScale: any,
  labelGap: number,
  barBorderRadius: number,
  valueLabelFormatter: ValueLabelFormatter,
  height: number,
  topMargin: number,
) => {
  // Update bars
  const bars = svg.selectAll('rect').data(data);
  bars.exit().remove();
  const newBars = createBars(svg, data, xScale, yScale, barBorderRadius);
  // animateBars(newBars, data, yScale); // TODO

  // Update bar value labels
  const barValueLabels = svg.selectAll(
    toCssClassSelector(BAR_LABEL_CLASS),
  ).data(data);
  barValueLabels.remove();
  const newBarValueLabels = createBarValueLabels(svg, data, xScale, yScale, labelGap, valueLabelFormatter);
  // animateBarValueLabels(newBarValueLabels, data, yScale, labelGap); // TODO

  console.log('xAxis', xAxis);

  const xAxisElement = svg.select(
    toCssClassSelector(X_AXIS_CLASS),
  );

  console.log('xAxisElement', xAxisElement);

  xAxisElement
    .selectAll('text')
    .data(data)
    .exit()
    .remove();

  xAxisElement.call(xAxis);

  // Update the xScale and yScale domains
  const width = Math.max(700, data.length * 50);
  console.log('width', width);
  xScale.domain(range(data.length)).range([0, width]);
  yScale.domain([0, max(data.map(([, value]) => toAbsolute(value))) as number]);

  svg
    .attr('width', width)
    .attr('height', height);

  // Update xAxis
  // createXAxis(svg, data, xScale, height, topMargin);
};

export const createBarChart = ({
  container,
  data,
  labelGap = 10,
  minWidthPerBar = 50,
  barBorderRadius = 5,
  topMargin = 30,
  valueLabelFormatter = ((value) => value) as ValueLabelFormatter,
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

  const barValueLabels = createBarValueLabels(
    svg,
    data,
    xScale,
    yScale,
    labelGap,
    valueLabelFormatter,
  );

  const {
    xAxis,
  } = createXAxis(svg, data, xScale, height, topMargin);

  animateBarValueLabels(barValueLabels, data, yScale, labelGap);

  const update = (data: BarChartData) => {
    updateBarChart(
      svg,
      data,
      xScale,
      xAxis,
      yScale,
      labelGap,
      barBorderRadius,
      valueLabelFormatter,
      height,
      topMargin,
    );
  };

  return {
    update,
  };
};
