<template>
  <div :class="$style.barChart">
    <div ref="container" />
  </div>
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

const container = ref<HTMLElement>();

interface CreateBarProps {
  container: string | HTMLElement;
  data: number[];
  labelGap?: number;
}

const createBarChart = ({
  container,
  data,
  labelGap = 10,
  minWidthPerBar = 50,
  roundedBorderRadius = 5,
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
    .range([height - topMargin, 0 + topMargin]);

  // Create the SVG element
  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('overflow', 'auto'); // Make the chart scrollable

  // Create the bars
  svg.selectAll<SVGRectElement, number>('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i) as number)
    .attr('y', (d) => yScale(Math.abs(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => Math.abs(yScale(0) - yScale(Math.abs(d))))
    .attr('fill', (d) => (d >= 0 ? 'steelblue' : 'red'))
    .attr('rx', roundedBorderRadius) // Rounded border on x-axis
    .attr('ry', roundedBorderRadius); // Rounded border on y-axis

  // Add labels to the bars
  svg.selectAll<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', (d) => yScale(Math.abs(d)) - labelGap)
    .attr('font-size', '12px')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white');
};

onMounted(() => {
  const demoData = [0, 0, -231, -779, 1479, 2512, 1267, 800, 495, 0];

  createBarChart({
    container: container.value,
    data: [
      ...demoData,
    ],
  });
});
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
