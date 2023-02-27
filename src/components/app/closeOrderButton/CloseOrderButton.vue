<template>
  <Dropdown
    v-model:is-visible="isTooltipVisible"
    placement="top"
    :transition-duration="600"
    :block-inner-toggling="true"
    @trigger-click="onTriggerClick"
    @click-outside="onClickOutside"
    @trigger-dbclick="onTriggerDoubleClick"
  >
    <template #trigger>
      <div :class="$style.deleteButton">
        <Icon icon="cross" />
      </div>
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

const onTriggerDoubleClick = () => {
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
  padding: 5px;
  color: rgb(var(--color-danger));
}
</style>
