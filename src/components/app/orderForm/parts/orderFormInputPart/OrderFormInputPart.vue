<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <NumberInput
        v-model="baseCurrency.price"
        :state="['defaultColor', 'smSize']"
        :min="1"
      >
        <template #append>
          USDT
        </template>
      </NumberInput>
    </template>
    <template #amountLabel>
      {{ t('order.amount') }}
    </template>
    <template #amountInput>
      <FormNumberInput
        name="quantity"
        type="number"
        :state="['defaultColor', 'smSize']"
        :decimals="baseCurrency.decimals"
        :step="baseCurrency.step"
      >
        <template #append>
          BTC
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
        <template #quoteCurrencyName>
          USDT
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
        :leverage="model.leverage"
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
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import Button from '@/components/core/button/Button.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { FormNumberInput, FormDepositInput, FormExchangeInput } from '@/components/form';
import { OrderFormInputPartProps } from '@/components/app/orderForm/parts/orderFormInputPart/index';

const props = defineProps<OrderFormInputPartProps>();

const { t } = useI18n();

const quoteCurrency = reactive({
  balance: 3208,
  decimals: 2,
});

const baseCurrency = reactive({
  price: 16890,
  decimals: 3,
  step: 0.001,
});
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
