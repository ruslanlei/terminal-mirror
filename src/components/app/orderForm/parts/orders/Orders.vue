<template>
  <OrderFormOrdersPartContainer>
    <template #orderSideSelector="{ orderSideOptionClass }">
      <Selector
        v-model="orderDirection"
        :state="['mdSize', 'secondaryColor5']"
        :options="orderDirectionOptions"
      >
        <template #option="{ option }">
          <div :class="orderSideOptionClass">
            <Icon :icon="option.icon" />
            {{ option.label }}
          </div>
        </template>
      </Selector>
    </template>
    <template #additionalSettingsSelector>
      <Selector
        v-model="orderType"
        :options="orderTypeOptions"
        :state="['primaryColor2', 'mdSize']"
      />
    </template>
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <Input
        type="number"
        size="sm"
      >
        <template #append>
          USDT
        </template>
      </Input>
    </template>
    <template #amountLabel>
      {{ t('order.amount') }}
    </template>
    <template #amountInput>
      <Input
        type="number"
        size="sm"
      >
        <template #append>
          BTC
        </template>
      </Input>
    </template>
    <template #volumeLabel>
      {{ t('order.volume') }}
    </template>
    <template #volumeInput>
      <Input
        type="number"
        size="sm"
      >
        <template #append>
          USDT
        </template>
      </Input>
    </template>
  </OrderFormOrdersPartContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Input from '@/components/core/input/Input.vue';
import OrderFormOrdersPartContainer from '@/containers/orderFormOrdersPartContainer/OrderFormOrdersPartContainer.vue';
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
    label: t('order.additionalSettings.input'),
    value: 'input',
  },
  {
    label: t('order.additionalSettings.tp'),
    value: 'tp',
  },
  {
    label: t('order.additionalSettings.sl'),
    value: 'sl',
  },
  {
    label: t('order.additionalSettings.slx'),
    value: 'slx',
  },
]);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.label {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.inputRow {}
</style>
