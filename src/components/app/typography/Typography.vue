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
import { useComputedState } from '@/hooks/useComputedState';
import { TypographyProps } from './index';

const props = withDefaults(
  defineProps<TypographyProps>(),
  {
    isInline: false,
    state: () => [],
    size: () => [],
  },
);

const ComputedComponent = computed(() => (props.isInline ? 'span' : 'div'));

const computedState = useComputedState(props);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.typography {}

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

.accent2 {
  color: rgb(var(--color-accent-2));
}

.success {
  color: rgb(var(--color-success));
}

.danger {
  color: rgb(var(--color-danger));
}

.bold {
  font-weight: 600;
}
</style>
