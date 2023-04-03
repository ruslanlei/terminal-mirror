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
  max,
  select,
} from 'd3';
import { onMounted, ref } from 'vue';
import { toAbsolute } from '@/utils/number';
import { multiply } from '@/helpers/number';

const wrapper = ref<HTMLElement>();
const container = ref<HTMLElement>();

interface CreateBarProps {
  container: HTMLElement;
  data: number[];
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

  // Create the y scale
  const yScale = scaleLinear<number>()
    .domain([0, max(data) as number])
    .range([height - topMargin, topMargin]);

  // Create the SVG element
  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Create the bars
  const bars = svg.selectAll<SVGRectElement, number>('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i) as number)
    .attr('y', (d) => yScale(toAbsolute(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => yScale(0) - yScale(toAbsolute(d)))
    .attr('fill', (d) => (d >= 0 ? 'steelblue' : 'red'))
    .attr('rx', barBorderRadius)
    .attr('ry', barBorderRadius);

  // Add labels to the bars
  const labels = svg.selectAll<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', (d) => yScale(toAbsolute(d)) - labelGap)
    .attr('font-size', '12px')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white');

  // Labels appearance animation
  labels
    .attr('y', (d) => yScale(toAbsolute(d)) - labelGap - 300)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .attr('y', (d) => yScale(toAbsolute(d)) - labelGap)
    .attr('opacity', 1)
    .delay((d, i) => multiply(data.length - i, 40))
    .ease();

  // Bars appearance animation
  bars
    .attr('y', (d) => yScale(toAbsolute(d)) - 60)
    .attr('opacity', 0)
    .transition()
    .duration(300)
    .attr('y', (d) => yScale(toAbsolute(d)))
    .attr('opacity', 1)
    .delay((d, i) => multiply(data.length - i, 40))
    .ease();

  // Define the update function
  const update = (newData: number[]) => {
    // Update the x scale domain
    xScale.domain(range(newData.length));

    // Update the y scale domain
    yScale.domain([0, max(newData) as number]);

    // Update the bars
    const updatedBars = bars.data(newData);
    updatedBars.enter()
      .append('rect')
    // Add the initial attributes here
    // ...
      .merge(updatedBars) // Merge the enter and update selections
      .transition()
      .duration(300)
    // Add the updated attributes here
    // ...
      .delay((d, i) => i * 100);

    // Remove bars with no corresponding data
    updatedBars.exit()
      .transition()
      .duration(800)
      .attr('height', 0)
      .attr('y', height)
      .remove();

    // Update the labels
    const updatedLabels = labels.data(newData);
    updatedLabels.enter()
      .append('text')
    // Add the initial attributes here
    // ...
      .merge(updatedLabels) // Merge the enter and update selections
      .transition()
      .duration(800)
    // Add the updated attributes here
    // ...
      .delay((d, i) => i * 100);

    // Remove labels with no corresponding data
    updatedLabels.exit()
      .transition()
      .duration(800)
      .attr('y', height)
      .remove();
  };

  return {
    update,
  };
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
  const demoData = [0, 0, -231, -779, 1479, 2512, 1267, 800, 495, 0];

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
