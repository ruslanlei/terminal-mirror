<template>
  <div :class="$style.barChart">
    <div ref="container" />
  </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted, ref } from 'vue';

const container = ref<HTMLElement>();

interface CreateBarProps {
  container: string | HTMLElement;
  data: number[];
  labelGap?: number;
}

const createBarChart = ({
  container, data, labelGap = 10, minWidthPerBar = 50, roundedBorderRadius = 5,
}: CreateBarProps) => {
  // Define the dimensions of the chart
  const numBars = data.length;
  const width = Math.max(700, numBars * minWidthPerBar);
  const height = 300;

  // Create the x scale
  const xScale = d3.scaleBand<number>()
    .domain(d3.range(data.length))
    .range([0, width])
    .padding(0.1)
    .paddingInner(0.2);

  // Create the y scale
  const yScale = d3.scaleLinear<number>()
    .domain([0, d3.max(data) as number])
    .range([height, 0]);

  // Create the SVG element
  const svg = d3.select(container)
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
    .attr('y', (d) => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => height - yScale(d))
    .attr('fill', 'steelblue')
    .attr('rx', roundedBorderRadius) // Rounded border on x-axis
    .attr('ry', roundedBorderRadius); // Rounded border on y-axis

  // Add labels to the bars
  svg.selectAll<SVGTextElement, number>('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => xScale(i) as number + xScale.bandwidth() / 2)
    .attr('y', (d) => yScale(d) - labelGap)
    .attr('font-size', '12px')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white');
};

onMounted(() => {
  createBarChart({
    container: container.value,
    data: [10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30, 10, 20, 100, 30],
  });
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.barChart {
  @include scrollbarDefault();
  width: 700px;
  overflow-x: auto;
}
</style>
