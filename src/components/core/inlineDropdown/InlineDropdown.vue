<template>
  <div :class="$style.inlineDropdown">
    <button
      type="button"
      :class="$style.trigger"
    >
      <slot name="trigger" />
    </button>
    <div :class="$style.contentContainer">
      <div
        ref="content"
        :class="$style.content"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { getRectField, toCssPxValue } from '@/helpers/style';
import { compose } from '@/utils/fp';

const content = ref();

const computedContainerStyles = ref({
  height: toCssPxValue(0),
});

const setContentHeightToContainerHeight = () => {
  computedContainerStyles.value.height = compose(
    toCssPxValue,
    getRectField('height'),
  )(content.value);
};

const setContainerHeightToZero = () => {
  computedContainerStyles.value.height = toCssPxValue(0);
};

const isExpanded = ref(false);

const calculateContainerHeight = () => {
  (isExpanded.value
    ? setContentHeightToContainerHeight
    : setContainerHeightToZero)();
};

watch(isExpanded, calculateContainerHeight);
useEnvironmentObserver(content, calculateContainerHeight);
</script>

<style lang="scss" module>
.inlineDropdown {}

.trigger {}

.contentContainer {
  position: relative;
  overflow: hidden;
  transition: height 200ms;
}

.content {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
