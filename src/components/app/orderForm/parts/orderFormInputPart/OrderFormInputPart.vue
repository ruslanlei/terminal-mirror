<template>
  <OrderFormInputPartContainer :class="$style.tab">
    <template #priceLabel>
      {{ t('order.price') }}
    </template>
    <template #priceInput>
      <NumberInput
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
      <NumberInput
        type="number"
        :state="['defaultColor', 'smSize']"
        :min="0.000001"
      >
        <template #append>
          BTC
        </template>
      </NumberInput>
    </template>
    <template #volumeLabel>
      {{ t('order.volume') }}
    </template>
    <template #volumeInput>
      <FormNumberInput
        name="quantity"
        :state="['defaultColor', 'smSize']"
        :min="1"
      >
        <template #append>
          USDT
        </template>
      </FormNumberInput>
    </template>
    <template #depositLabel>
      {{ t('order.deposit') }}
    </template>
    <template #depositInput>
      <FormDepositInput
        name="quantity"
        :balance="balance"
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
import { FormNumberInput, FormDepositInput } from '@/components/form';
import { OrderFormInputPartProps } from '@/components/app/orderForm/parts/orderFormInputPart/index';

const props = defineProps<OrderFormInputPartProps>();

const { t } = useI18n();

const balance = ref(3208);
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
