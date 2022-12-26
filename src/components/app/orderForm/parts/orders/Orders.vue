<template>
  <div :class="$style.orderFormPartOrders">
    <Selector
      v-model="orderType"
      :state="['defaultSize', 'secondaryColor5']"
      :options="orderTypeOptions"
    >
      <template #option="{ option }">
        <div :class="$style.orderTypeOption">
          <Icon :icon="option.icon" />
          {{ option.label }}
        </div>
      </template>
    </Selector>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { SelectorProps } from '@/components/core/selector';

const { t } = useI18n();

const orderType = ref('long');

const orderTypeOptions = computed<SelectorProps['options']>(() => [
  {
    label: t('order.type.long'),
    value: 'long',
    state: 'success',
    icon: 'trendingUp',
  },
  {
    label: t('order.type.short'),
    value: 'short',
    state: 'danger',
    icon: 'trendingDown',
  },
]);
</script>

<style lang="scss" module>
.orderFormPartOrders {
  padding: 22px;
}

.orderTypeOption {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
