<template>
  <StatisticsResultRow>
    <template #prepend>
      prepend
    </template>
    <template #primaryInfoTop>
      primaryInfoTop
    </template>
    <template #primaryInfoBottom>
      primaryInfoBottom
    </template>
    <template #secondaryInfoTop>
      secondaryInfoTop
    </template>
    <template #secondaryInfoBottom>
      secondaryInfoBottom
    </template>
    <template #append>
      append
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
</script>

<style lang="scss" module>

</style>
