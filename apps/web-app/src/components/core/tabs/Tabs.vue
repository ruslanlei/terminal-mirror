<template>
  <div :class="$style.tabs">
    <UiSelector
      v-model="localValue"
      :options="tabs"
      :thickening="0"
      :is-ghost-appear-animation="false"
      v-bind="selectorProps"
      @select-next="onSelectNext"
      @select-prev="onSelectPrev"
    />
    <div :class="[$style.contentWrapper, contentClass]">
      <transition :name="computedTransitionName">
        <div
          :key="localValue"
          :class="$style.tabContent"
        >
          <KeepAlive>
            <slot :name="`tab(${localValue})`" />
          </KeepAlive>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { UiSelector } from '@terminal/uikit/components/selector';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TabsEmits, TabsProps } from './index';

const props = withDefaults(
  defineProps<TabsProps>(),
  {
    selectorProps: () => ({
      state: ['tabsShape', 'secondaryColor2'],
    }),
  },
);

const emit = defineEmits<TabsEmits>();

const localValue = useLocalValue<TabsProps['modelValue']>(props, emit, 'modelValue');

const switchDirection = ref<'prev' | 'next'>('next');
const computedTransitionName = computed(() => ({
  prev: 'tabsTransitionPrev',
  next: 'tabsTransitionNext',
}[switchDirection.value]));

const onSelectNext = () => {
  switchDirection.value = 'next';
};

const onSelectPrev = () => {
  switchDirection.value = 'prev';
};
</script>

<style lang="scss" module>
.tabs {
  background-color: rgb(var(--color-background-3));
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.tabContent {
  height: 100%;
}

.contentWrapper {
  position: relative;
  overflow: hidden;
  flex-grow: 1;
}
</style>

<style lang="scss">
$transitionDuration: 210ms;

.tabsTransitionPrev {
  &-enter-active,
  &-leave-active {
    transition: transform $transitionDuration ease;
    position: absolute;
    inset: 0;
  }

  &-enter-from {
    transform: translateX(-100%);
  }
  &-leave-to {
    transform: translateX(100%);
  }
}

.tabsTransitionNext {
  &-enter-active,
  &-leave-active {
    transition: transform $transitionDuration ease;
    position: absolute;
    inset: 0;
  }

  &-enter-from {
    transform: translateX(100%);
  }
  &-leave-to {
    transform: translateX(-100%);
  }
}
</style>
