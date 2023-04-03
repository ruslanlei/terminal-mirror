<template>
  <div
    v-if="renderKey"
    ref="wrapper"
    :class="$style.barChart"
  >
    <div ref="container" />
  </div>
  <Button
    style="color: white"
    @click="rerender"
  >
    Rerender
  </Button>
</template>

<script setup lang="ts">
import {
  scaleBand,
  range,
  scaleLinear,
  select,
  axisBottom,
} from 'd3';
import { onMounted, ref } from 'vue';
import { toAbsolute } from '@/utils/number';
import { multiply } from '@/helpers/number';
import { findMaxByKey } from '@/utils/array';

const wrapper = ref<HTMLElement>();
const container = ref<HTMLElement>();

interface CreateBarProps {
  container: HTMLElement;
  data: Array<[string, number]>;
  labelGap?: number;
}

const createBarChart = ({
  container,
  data,
  labelGap = 10,
  minWidthPerBar = 50,
  barBorderRadius = 5,
  topMargin = 30,
}: CreateBarProps) => {
  // Define the dimensions of the chart
  const numBars = data.length;
  const width = Math.max(700, numBars * minWidthPerBar);
  const height = 300;

  // Create the x scale
  const xScale = scaleBand<number>()
    .domain(range(data.length))
    .range([0, width])
    .padding(0.1)
    .paddingInner(0.2);

  const xAxisLabels = data.map(([label]) => label);

  const xAxis = axisBottom(xScale)
    .tickFormat((d, i) => xAxisLabels[i]);

  // Create the y scale
  const yScale = scaleLinear<number>()
    .domain([0, findMaxByKey(1, data) as number])
    .range([height - topMargin, topMargin]);

  // Create the SVG element
  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Add value labels to the bars
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

  // Labels appearance animation
  barValueLabels
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap - 300)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .delay((d, i) => multiply(data.length - i, 40))
    .attr('y', ([, value]) => yScale(toAbsolute(value)) - labelGap)
    .attr('opacity', 1)
    .ease();

  // Create the bars
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

  // Append xAxis to svg container
  const xAxisElement = svg.append('g')
    .attr('transform', `translate(0, ${height - topMargin})`)
    .attr('style', 'color: white')
    .call(xAxis);

  // remove line on xAxis
  xAxisElement
    .select('.domain')
    .attr('stroke', 'none');

  // remove vertical dashes on xAxis
  xAxisElement
    .selectAll('line')
    .attr('stroke-width', 0);

  // set styles to xAxis labels
  xAxisElement
    .selectAll('text')
    .style('font-size', '12px');

  // Bars appearance animation
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

const scrollToRight = (
  element: HTMLElement,
) => {
  const scrollPosition = element.scrollLeft;

  if (scrollPosition === 0) {
    // If we've scrolled all the way to the left
    const { scrollWidth } = element;
    const elementWidth = element.offsetWidth;
    element.scrollLeft = scrollWidth - elementWidth; // Scroll to the end
  }
};

const renderChart = () => {
  const demoData = [
    ['Jan', 0],
    ['Feb', -231],
    ['Mar', -779],
    ['Apr', 1479],
    ['May', 2512],
    ['Jun', 1267],
    ['Jul', 800],
    ['Aug', 495],
    ['Sep', 0],
    ['Oct', 0],
    ['Nov', 0],
    ['Dec', 0],
  ];

  createBarChart({
    container: container.value,
    data: [
      ...demoData,
      ...demoData,
    ],
  });

  scrollToRight(wrapper.value);
};

onMounted(renderChart);

const renderKey = ref(true);
const rerender = () => {
  container.value.innerHTML = '';
  renderChart();
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.barChart {
  width: 700px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
