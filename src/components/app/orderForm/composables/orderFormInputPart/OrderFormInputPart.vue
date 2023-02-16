<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <FormNumberInput
        name="price"
        state="defaultColor"
        :min="1"
        save-on="blur"
        :append-min-width="35"
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
    <template #ratioLabel>
      {{ t('order.ratioLabel') }}
    </template>
    <template #ratio>
      {{ ratio }}
    </template>
    <template #profit>
      {{ profitDisplayValue }}
    </template>
    <template #loss>
      {{ riskDisplayValue }}
    </template>
  </OrderFormInputPartContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import { FormDepositInput, FormExchangeInput, FormNumberInput } from '@/form';
import { useOrderFormInject } from '@/hooks/useOrderFormInject';
import { useExchange } from '@/hooks/useExchange';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  activePairData,
  baseCurrencyDecimals,
  quoteCurrencyDecimals,
  balance,
  baseCurrencyStep,
} = storeToRefs(marketStore);

const {
  model,
  price,
  leverage,
  pledge,
  liquidationPrice,
  ratio,
  profitDisplayValue,
  riskDisplayValue,
} = useOrderFormInject();

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
