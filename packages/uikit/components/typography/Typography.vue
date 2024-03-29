<template>
  <component
    :is="ComputedComponent"
    :class="[
      $style.typography,
      $style[size],
      ...computedState,
    ]"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useComputedState } from '../../hooks/useComputedState';
import { TypographyProps } from './index';

const props = withDefaults(
  defineProps<TypographyProps>(),
  {
    isInline: false,
    state: () => [],
    size: () => null,
  },
);

const ComputedComponent = computed(() => (props.isInline ? 'span' : 'p'));

const computedState = useComputedState(props);
</script>

<style lang="scss" module>
@import "../../assets/styles/utils";

.typography {
}

.massive1 {
  @include massive1;
}

.massive2 {
  @include massive2;
}

.massive2sm {
  @include massive2sm;
}

.massive3 {
  @include massive3;
}

.massive4 {
  @include massive4;
}

.h1 {
  @include h1;
}

.h2 {
  @include h2;
}

.h3 {
  @include h3;
}

.title1 {
  @include title1;
}

.title2 {
  @include title2;
}

.title3 {
  @include title3;
}

.title4 {
  @include title4;
}

.title5 {
  @include title5;
}

.title6 {
  @include title6;
}

.title7 {
  @include title7;
}

.textLg {
  @include textLg;
}

.text {
  @include text;
}

.textSm {
  @include textSm;
};

.accent1 {
  color: rgb(var(--color-accent-1));
}

.accent15 {
  color: rgb(var(--color-accent-15));
}

.accent2 {
  color: rgb(var(--color-accent-2));
}

.background1 {
  color: rgb(var(--color-background-1));
}

.success {
  color: rgb(var(--color-success));
}

.danger {
  color: rgb(var(--color-danger));
}

.danger2 {
  color: rgb(var(--color-danger-3));
}

.lightBlack {
  color: rgb(var(--color-background-4));
}

.danger3 {
  color: rgb(var(--color-danger-3));
}

.gradientPrimary {
  background: var(--color-main-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blueGradient {
  background: var(--color-blue-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bold {
  font-weight: 700;
}

.semiBold {
  font-weight: 600;
}

.medium {
  font-weight: 500;
}

.alignCenter {
  text-align: center;
}

.alignRight {
  text-align: right;
}

.nowrap {
  white-space: nowrap;
}

.uppercase {
  text-transform: uppercase;
}
</style>
