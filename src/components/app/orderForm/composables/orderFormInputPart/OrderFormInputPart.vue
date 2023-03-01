<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <FormNumberInput
        name="price"
        state="defaultColor"
        :min="0"
        :step="0.001"
        save-on="blur"
        :append-min-width="35"
        tab-index="0"
      >
        <template #append>
          {{ activePairData?.quote }}
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
        :max="maxBaseCurrencyDepositLeveraged"
        state="defaultColor"
        :decimals="baseCurrencyDecimals"
        :step="baseCurrencyStep"
        save-on="blur"
        :show-error-icon="false"
        :append-min-width="35"
        tab-index="0"
      >
        <template #append>
          {{ activePairData?.base }}
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
        :base-currency-decimals="baseCurrencyDecimals"
        :quote-currency-decimals="quoteCurrencyDecimals"
        :base-currency-step="baseCurrencyStep"
        :balance="balance"
        :leverage="leverage"
        :price="price"
        save-on="blur"
        :append-min-width="35"
        tab-index="0"
      >
        <template #quoteCurrency>
          {{ activePairData?.quote }}
        </template>
      </FormExchangeInput>
    </template>
    <template #depositLabel>
      {{ t('order.deposit') }}
    </template>
    <template #depositInput>
      <FormDepositInput
        name="quantity"
        :base-currency-decimals="baseCurrencyDecimals"
        :quote-currency-decimals="quoteCurrencyDecimals"
        :base-currency-step="baseCurrencyStep"
        :balance="balance"
        :leverage="leverage"
        :price="price"
      />
    </template>
    <template #leverageLabel>
      {{ t('order.leverageSize') }}
    </template>
    <template #leverageInput>
      <FormNumberInput
        name="leverage"
        :class="$style.input"
        state="defaultColor"
        type="number"
        :min="1"
        :max="20"
        save-on="blur"
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
    <template #estimates>
      <OrderFormEstimates state="tiny" />
    </template>
  </OrderFormInputPartContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import { FormDepositInput, FormExchangeInput, FormNumberInput } from '@/form';
import { useExchange } from '@/hooks/useExchange';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { useEmulatorStore } from '@/stores/emulator';
import OrderFormEstimates from '@/components/app/orderForm/composables/orderFormEstimates/OrderFormEstimates.vue';
import { injectOrderFormState } from '@/components/app/orderForm';

const { t } = useI18n();

const emulatorStore = useEmulatorStore();
const {
  balance,
} = storeToRefs(emulatorStore);

const marketStore = useMarketStore();
const {
  activePairData,
  baseCurrencyDecimals,
  quoteCurrencyDecimals,
  baseCurrencyStep,
} = storeToRefs(marketStore);

const {
  model,
  price,
  leverage,
  pledge,
  liquidationPrice,
} = injectOrderFormState();

const {
  maxBaseCurrencyDepositLeveraged,
} = useExchange(
  quoteCurrencyDecimals,
  baseCurrencyStep,
  price,
  balance,
  leverage,
);
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
