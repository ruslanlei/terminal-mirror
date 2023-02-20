<template>
  <div :class="$style.marketContainer">
    <div
      :style="stickyElementStyles"
      :class="$style.tools"
    >
      <slot name="tools" />
    </div>
    <main :class="$style.main">
      <div :class="$style.chartContainer">
        <div :class="$style.chartWrapper">
          <slot
            name="chart"
            :chart-class="$style.chart"
          />
        </div>
      </div>
      <div :class="$style.chartDivider" />
      <div :class="$style.ordersWrapper">
        <slot
          name="orders"
          :orders-class="$style.orders"
        />
      </div>
    </main>
    <aside
      :style="stickyElementStyles"
      :class="$style.sideBar"
    >
      <div :class="$style.orderSettings">
        <slot name="sidebar" />
      </div>
      <div
        v-if="'playerControls' in $slots"
        :class="$style.playerControls"
      >
        <slot name="playerControls" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { size } from '@/enums/sizing';

const stickyElementStyles = computed(() => ({
  position: 'sticky',
  top: `${size.HEADER}px`,
  height: `calc(100 * var(--vh) - ${size.HEADER}px)`,
}));
</script>

<style lang="scss" module>
.marketContainer {
  display: grid;
  grid-template-columns: 50px 1fr 320px;
  gap: 20px;
  padding: 0 20px;
}

.tools {
  padding-bottom: 20px;
}

.main {
  display: flex;
  flex-direction: column;
}

.chartContainer {
  height: 500px;
  position: relative;
}

.chartWrapper {
  position: absolute;
  inset: 0;
}

.chart {
  height: 100%;
}

.chartDivider {
  height: 2px;
  border-radius: 1px;
  width: 100%;
  background-color: rgb(var(--color-background-3));
}

.ordersWrapper {
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
}

.orders {
  width: 100%;
  flex-grow: 1;
}

.sideBar {
  display: grid;
  grid-template-rows: 1fr 152px;
  gap: 20px;
  padding-bottom: 20px;
}

.orderSettings {
}

.playerControls {
}
</style>
