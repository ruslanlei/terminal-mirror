<template>
  <div :class="$style.marketContainer">
    <div
      :style="stickyElementStyles"
      :class="$style.tools"
    >
      <slot name="tools" />
    </div>
    <main :class="$style.main">
      <div :class="$style.chartView">
        <div :class="[$style.favoritesContainer, !isFavoritesVisible && $style.hidden]">
          <div :class="$style.favoritesWrapper">
            <slot
              name="favorites"
              :favorites-class="$style.favorites"
            />
          </div>
        </div>
        <div :class="$style.chartColumn">
          <header :class="$style.chartHeader">
            <slot name="chartHeader" />
          </header>
          <div :class="$style.chartContainer">
            <div :class="$style.chartWrapper">
              <slot
                name="chart"
                :chart-class="$style.chart"
              />
            </div>
          </div>
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
import { MarketContainerProps } from './index';

const props = defineProps<MarketContainerProps>();

const stickyElementStyles = computed(() => ({
  position: 'sticky',
  top: `${size.HEADER}px`,
  height: `calc(100 * var(--vh) - ${size.HEADER}px)`,
}));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

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
  gap: 20px;
}

.chartView {
  display: flex;
}

.favoritesContainer {
  padding-right: 20px;
  transition: padding-right 200ms;
  overflow: hidden;
  height: 100%;
  &.hidden {
    padding-right: 0;
    .favoritesWrapper {
      width: 0;
    }
  }
}

.favoritesWrapper {
  position: relative;
  transition: width 200ms;
  width: 87px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.favorites {
  position: absolute;
  left: 0;
  width: 87px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  @include scrollbarDefault(4px, 2px, false);
}

.chartHeader {}

.chartColumn {
  flex-grow: 1;
}

.chartContainer {
  flex-grow: 1;
  height: 500px;
  position: relative;
  margin-top: 20px;
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
  flex-grow: 1;
  display: flex;
  padding-bottom: 20px;
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
