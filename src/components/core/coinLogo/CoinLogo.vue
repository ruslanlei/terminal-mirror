<template>
  <div :class="[$style.container, $style[state]]">
    <transition
      name="currencyLogoAnimation"
      mode="out-in"
    >
      <svg
        :key="currency"
        :class="$style.source"
      >
        <use :xlink:href="`#coin-logo-${currency}`" />
      </svg>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { CoinLogoProps } from './index';

const props = withDefaults(
  defineProps<CoinLogoProps>(),
  {
    state: 'circle',
  },
);
</script>

<style lang="scss" module>
.container {
  transition: 200ms background-color;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.circle {
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border-radius: 50%;
}

.square {
  width: 30px;
  min-width: 30px;
  height: 40px;
  min-height: 40px;
  border-radius: 5px;
}

$svgWidth: 100px;
$svgHeight: 120px;

.source {
  width: $svgWidth;
  min-width: $svgWidth;
  height: $svgHeight;
  min-height: $svgHeight;
  position: absolute;
}
</style>

<style lang="scss">
.currencyLogoAnimation {
  &-enter-active,
  &-leave-active {
    transition: transform 250ms, opacity 250ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: rotate(-180deg) scale(1.5);
  }
  &-leave-to {
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
