<template>
  <div
    :style="computedStyles"
    :class="[
      $style[size],
      $style.fieldError,
      !isVisible && $style.hidden,
    ]"
  >
    <div
      ref="container"
      :class="$style.fieldErrorContainer"
      :style="computedInnerStyles"
    >
      <Icon
        v-if="showIcon"
        :class="$style.icon"
        icon="info"
        :size="computedIconSize"
      />
      <span :class="$style.text">
        <slot>
          {{ text }}
        </slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import { FieldErrorProps } from '@/components/core/fieldError/index';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import Icon from '@/components/core/icon/Icon.vue';

const props = withDefaults(
  defineProps<FieldErrorProps>(),
  {
    showIcon: true,
    size: 'lg',
    offset: 0,
  },
);

const container = ref<HTMLElement>();

const isVisible = computed(() => !!props.text);

const computedStyles = ref({
  height: '0px',
});
const calculateHeight = () => {
  if (isVisible.value) {
    if (!container.value) return;

    const containerRect = container.value.getBoundingClientRect();
    computedStyles.value.height = `${containerRect.height}px`;
  } else {
    computedStyles.value.height = '0px';
  }
};

const computedInnerStyles = computed(() => ({
  paddingTop: `${props.offset}px`,
}));

const computedIconSize = computed(() => ({
  sm: 12,
  lg: 18,
}[props.size]));

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(calculateHeight);

onMounted(() => {
  calculateHeight();
  setListeners();
});
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.fieldError {
  position: relative;
  overflow: hidden;
  transition: height 160ms, opacity 160ms;
  font-size: inherit;
  color: inherit;
  &.hidden {
    opacity: 0;
  }
}

.fieldErrorContainer {
  display: flex;
  //align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: inherit;
}

.icon {
  width: 12px;
  min-width: 12px;
  & + .text {
    margin-left: 8px;
  }
}

.text {
  color: inherit;
}

// states
.sm {
  @include title7;
  font-weight: 600;
}

.lg {
  @include text;
  font-weight: 500;
}
</style>
