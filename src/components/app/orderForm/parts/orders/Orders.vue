<template>
  <div :class="$style.orderFormPartOrders">
    <Selector
      v-model="orderDirection"
      :state="['mdSize', 'secondaryColor5']"
      :options="orderDirectionOptions"
    >
      <template #option="{ option }">
        <div :class="$style.orderTypeOption">
          <Icon :icon="option.icon" />
          {{ option.label }}
        </div>
      </template>
    </Selector>
    <Selector
      v-model="orderType"
      :options="orderTypeOptions"
      :state="['primaryColor2', 'mdSize']"
      :class="$style.orderTypeSelector"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { SelectorProps } from '@/components/core/selector';

const { t } = useI18n();

const orderDirection = ref('long');

const orderDirectionOptions = computed<SelectorProps['options']>(() => [
  {
    label: t('order.direction.long'),
    value: 'long',
    state: 'success',
    icon: 'trendingUp',
  },
  {
    label: t('order.direction.short'),
    value: 'short',
    state: 'danger',
    icon: 'trendingDown',
  },
]);

const orderType = ref('input');

const orderTypeOptions = computed(() => [
  {
    label: t('order.type.input'),
    value: 'input',
  },
  {
    label: t('order.type.tp'),
    value: 'tp',
  },
  {
    label: t('order.type.sl'),
    value: 'sl',
  },
  {
    label: t('order.type.slx'),
    value: 'slx',
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

.orderTypeSelector {
  margin-top: 24px;
}
</style>
