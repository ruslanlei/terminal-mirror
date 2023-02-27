<template>
  <Dropdown
    v-model:is-visible="isTooltipVisible"
    placement="top"
    :transition-duration="600"
    :block-inner-toggling="true"
    @click-outside="onClickOutside"
  >
    <template #trigger>
      <button
        type="button"
        :class="$style.deleteButton"
        @click="onTriggerClick"
      >
        <Icon icon="cross" />
      </button>
    </template>
    <template #dropdown>
      <Tooltip :text="'testText'" />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Tooltip from '@/components/core/tooltip/Tooltip.vue';
import { CloseOrderButtonEmits } from './index';

const emit = defineEmits<CloseOrderButtonEmits>();

const isTooltipVisible = ref(false);

const isClicked = ref<boolean>(false);
const onTriggerClick = () => {
  if (!isClicked.value) {
    isTooltipVisible.value = true;
    isClicked.value = true;
    return;
  }
  isTooltipVisible.value = false;
  isClicked.value = false;
  emit('delete');
};

const onClickOutside = () => {
  isTooltipVisible.value = false;
  isClicked.value = false;
};
</script>

<style lang="scss" module>
.deleteButton {
  color: rgb(var(--color-danger));
}
</style>
