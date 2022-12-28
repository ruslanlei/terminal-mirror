<template>
  <div :class="$style.ordersForm">
    <Selector
      v-model="orderDirection"
      :state="['mdSize', 'secondaryColor5']"
      :options="orderDirectionOptions"
    >
      <template #option="{ option }">
        <div :class="$style.orderSideOption">
          <Icon :icon="option.icon" />
          {{ option.label }}
        </div>
      </template>
    </Selector>
    <Tabs
      v-model="settingsActiveTab"
      :tabs="settingsTabs"
      :selector-props="{
        state: ['primaryColor2', 'mdSize'],
        thickening: 2,
      }"
      :content-class="$style.settingsTabsContent"
      :class="$style.tabs"
    >
      <template #tab(input)>
        <OrderFormInputPartContainer :class="$style.tab">
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
              v-model="depositWithLeverage"
              type="number"
              size="sm"
            >
              <template #append>
                USDT
              </template>
            </Input>
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
        </OrderFormInputPartContainer>
      </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormInputPartContainer from '@/containers/orderFormInputPartContainer/OrderFormInputPartContainer.vue';
import Selector from '@/components/core/selector/Selector.vue';
import Icon from '@/components/core/icon/Icon.vue';
import Input from '@/components/core/input/Input.vue';
import DepositInput from '@/components/core/depositInput/DepositInput.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import Tabs from '@/components/core/tabs/Tabs.vue';
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

const settingsActiveTab = ref('input');

const settingsTabs = computed(() => [
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

const balance = ref(3208);

const deposit = ref(0);

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
@import "src/assets/styles/utils";

.ordersForm {
  padding: 22px;
}

.tabs {
  margin-top: 22px;
}

.tab {
  padding: 22px;
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
