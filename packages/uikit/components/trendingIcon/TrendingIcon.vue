<template>
  <div
    :class="[
      $style.trendingIcon,
      !isVisible && $style.hidden,
    ]"
  >
    <template v-if="direction === 'up' && isVisible">
      <Icon
        :key="direction"
        icon="trendingUp"
        :class="$style.up"
      />
    </template>
    <template v-if="direction === 'down' && isVisible">
      <Icon
        :key="direction"
        icon="trendingDown"
        :class="$style.down"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import Icon from '../icon/Icon.vue';
import { TrendingIconProps } from './index';

defineProps<TrendingIconProps>();
</script>

<style lang="scss" module>
$transitionDuration: 180ms;

.trendingIcon {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    width $transitionDuration,
    opacity $transitionDuration;

  &.hidden {
    width: 0;
    opacity: 0;
  }
}

$transitionShift: 12px;

.up {
  min-width: 24px;
  color: rgb(var(--color-success));
  @keyframes trendingIconUp {
    from {
      opacity: 0;
      transform: translateY($transitionShift);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: $transitionDuration trendingIconUp;
}

.down {
  min-width: 24px;
  color: rgb(var(--color-danger));
  @keyframes trendingIconDown {
    from {
      opacity: 0;
      transform: translateY(-$transitionShift);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: $transitionDuration trendingIconDown;
}
</style>
