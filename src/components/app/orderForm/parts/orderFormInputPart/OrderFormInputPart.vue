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
      <NumberInput
        v-model="depositWithLeverage"
        :state="['defaultColor', 'smSize']"
        :min="1"
      >
        <template #append>
          USDT
        </template>
      </NumberInput>
    </template>
    <template #depositLabel>
      {{ t('order.deposit') }}
    </template>
    <template #depositInput>
      <DepositInput
        v-model="depositWithLeverage"
        :balance="balance"
        :leveraged-balance="leveragedBalance"
      />
    </template>
    <template #leverageLabel>
      {{ t('order.leverageSize') }}
    </template>
    <template #leverageInput>
      <NumberInput
        v-model="leverage"
        :class="$style.input"
        :state="['defaultColor', 'smSize']"
        type="number"
        :min="1"
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
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import Input from '@/components/core/input/Input.vue';
import Button from '@/components/core/button/Button.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import DepositInput from '@/components/core/depositInput/DepositInput.vue';
import { computed, ref } from 'vue';

const { t } = useI18n();

const balance = ref(3208);

const deposit = ref(1);

const leverage = ref(1);

const depositWithLeverage = computed({
  get: () => deposit.value * leverage.value,
  set: (value: number) => {
    deposit.value = value / leverage.value;
  },
});

const leveragedBalance = computed(() => balance.value * leverage.value);
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
