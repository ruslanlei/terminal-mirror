<template>
  <UiDropdown
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
        <UiIcon icon="cross" />
      </div>
    </template>
    <template #dropdown>
      <UiTooltip>
        <UiTypography
          size="title4"
          :state="['semiBold', 'accent1']"
        >
          <i18n-t
            tag="span"
            keypath="orderList.closeTip.mainPart"
          >
            <template #close>
              <UiTypography
                is-inline
                :state="['danger', 'bold']"
              >
                {{ t('orderList.closeTip.close') }}
              </UiTypography>
            </template>
          </i18n-t>
        </UiTypography>
      </UiTooltip>
    </template>
  </UiDropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiTooltip } from '@terminal/uikit/components/tooltip';
import { UiDropdown } from '@terminal/uikit/components/dropdown';

import { CloseOrderButtonEmits } from './index';

const emit = defineEmits<CloseOrderButtonEmits>();

const { t } = useI18n();

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
