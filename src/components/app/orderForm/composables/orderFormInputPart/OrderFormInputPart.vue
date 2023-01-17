<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <FormNumberInput
        name="price"
        :state="['defaultColor', 'smSize']"
        :min="1"
        save-on="blur"
      >
        <template #append>
          {{ quoteCurrency.name }}
        </template>
      </FormNumberInput>
    </template>
    <template #amountLabel>
      {{ t('order.amount') }}
    </template>
    <template #amountInput>
      <FormNumberInput
        name="quantity"
        type="number"
        :min="0"
        :state="['defaultColor', 'smSize']"
        :decimals="baseCurrency.decimals"
        :step="baseCurrency.step"
      >
        <template #append>
          {{ baseCurrency.name }}
        </template>
      </FormNumberInput>
    </template>
    <template #volumeLabel>
      {{ t('order.volume') }}
    </template>
    <template #volumeInput>
      <FormExchangeInput
        name="quantity"
        :state="['defaultColor', 'smSize']"
        :base-currency="baseCurrency"
        :quote-currency="quoteCurrency"
        save-on="blur"
      >
        <template #quotecurrency>
          {{ quoteCurrency.name }}
        </template>
      </FormExchangeInput>
    </template>
    <template #depositLabel>
      {{ t('order.deposit') }}
    </template>
    <template #depositInput>
      <FormDepositInput
        name="quantity"
        :quote-currency="quoteCurrency"
        :base-currency="baseCurrency"
      />
    </template>
    <template #leverageLabel>
      {{ t('order.leverageSize') }}
    </template>
    <template #leverageInput>
      <FormNumberInput
        name="leverage"
        :class="$style.input"
        :state="['defaultColor', 'smSize']"
        type="number"
        :min="1"
        :max="20"
      />
    </template>
    <template #leverageLiquidationPrice>
      {{ pledge }}
    </template>
    <template #leveragePositionMargin>
      {{ liquidationPrice }}
    </template>
    <template #submit>
      <slot name="submit" />
    </template>
  </OrderFormInputPartContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import { FormDepositInput, FormExchangeInput, FormNumberInput } from '@/components/form';
import { useOrderFormInject } from '@/hooks/useOrderFormInject';

const { t } = useI18n();

const {
  model,
  quoteCurrency,
  baseCurrency,
  pledge,
  liquidationPrice,
} = useOrderFormInject();
</script>

<style lang="scss" module>
.tab {
  padding: 0 22px 22px 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.orderSideOption {
  display: flex;
  align-items: center;
  gap: 5px;
}

.settingsTabsContent {
  margin: 0 -22px;
}
</style>
