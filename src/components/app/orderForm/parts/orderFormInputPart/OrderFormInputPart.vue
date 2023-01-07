<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <NumberInput
        v-model="baseCurrencyPrice"
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
        :decimals="baseCurrencyDecimals"
        :step="baseCurrencyStep"
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
        :min="0"
        :base-currency-price="baseCurrencyPrice"
        :base-currency-decimals="baseCurrencyDecimals"
        :base-currency-step="baseCurrencyStep"
        :quote-currency-decimals="quoteCurrencyDecimals"
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
        :balance="balance"
        :base-currency-price="baseCurrencyPrice"
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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import Button from '@/components/core/button/Button.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { FormNumberInput, FormDepositInput, FormExchangeInput } from '@/components/form';
import { OrderFormInputPartProps } from '@/components/app/orderForm/parts/orderFormInputPart/index';

const props = defineProps<OrderFormInputPartProps>();

const { t } = useI18n();

const balance = ref(3208);

const baseCurrencyPrice = ref(16890);
const baseCurrencyDecimals = ref(3);
const baseCurrencyStep = ref(0.001);

const quoteCurrencyDecimals = ref(2);
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
