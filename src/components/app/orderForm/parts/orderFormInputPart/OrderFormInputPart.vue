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
      >
        <template #append>
          {{ quoteCurrency?.name }}
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
        :decimals="baseCurrency?.decimals"
        :step="baseCurrency?.step"
      >
        <template #append>
          {{ baseCurrency?.name }}
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
          {{ quoteCurrency?.name }}
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
        :max="50"
      />
    </template>
    <template #leverageLiquidationPrice>
      11
    </template>
    <template #leveragePositionMargin>
      1
    </template>
    <template #submit>
      <Button
        type="submit"
        :state="['primaryColor', 'mdSize', 'interactive']"
        :class="$style.submit"
      >
        {{ t('order.submit') }}
      </Button>
    </template>
  </OrderFormInputPartContainer>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import Button from '@/components/core/button/Button.vue';
import { FormDepositInput, FormExchangeInput, FormNumberInput } from '@/components/form';
import { OrderModel } from '@/hooks/useOrderCreate';
import { BaseCurrency } from '@/hooks/useExchange';

const { t } = useI18n();

const model = inject<OrderModel>('model');
const quoteCurrency = inject<BaseCurrency>('quoteCurrency');
const baseCurrency = inject<BaseCurrency>('baseCurrency');
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
