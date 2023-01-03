<template>
  <div
    :style="computedStyles"
    :class="[$style.fieldError, !isVisible && $style.hidden]"
  >
    <div
      ref="container"
      :class="$style.fieldErrorContainer"
    >
      <slot>
        {{ text }}
      </slot>
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

const props = defineProps<FieldErrorProps>();

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
  &.hidden {
    opacity: 0;
  }
}

.fieldErrorContainer {
  width: 100%;
  position: absolute;
  bottom: 0;
  @include title4;
}
</style>
