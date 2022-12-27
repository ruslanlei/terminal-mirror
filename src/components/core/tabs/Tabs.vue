<template>
  <div :class="$style.tabs">
    <Selector
      v-model="localValue"
      :options="tabs"
      :state="['tabsShape', 'secondaryColor2']"
      :thickening="0"
      :is-ghost-appear-animation="false"
      @select-next="onSelectNext"
      @select-prev="onSelectPrev"
    />
    <transition
      :name="computedTransitionName"
      mode="out-in"
    >
      <div
        :key="localValue"
        :class="$style.tabContent"
      >
        <slot :name="`tab(${localValue})`" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Selector from '@/components/core/selector/Selector.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TabsEmits, TabsProps } from './index';

const props = defineProps<TabsProps>();

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
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(var(--color-background-3));
}

.tabContent {
}
</style>

<style lang="scss">
.tabsTransitionPrev {
  &-enter-active,
  &-leave-active {
    transition: transform 220ms;
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
    transition: transform 220ms;
  }

  &-enter-from {
    transform: translateX(100%);
  }
  &-leave-to {
    transform: translateX(-100%);
  }
}
</style>
