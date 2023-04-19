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
      <Tooltip>
        <Typography
          size="title4"
          :state="['semiBold', 'accent1']"
        >
          <i18n-t
            tag="span"
            keypath="orderList.closeTip.mainPart"
          >
            <template #close>
              <Typography
                is-inline
                :state="['danger', 'bold']"
              >
                {{ t('orderList.closeTip.close') }}
              </Typography>
            </template>
          </i18n-t>
        </Typography>
      </Tooltip>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Tooltip from '@/components/core/tooltip/Tooltip.vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
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
