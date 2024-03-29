<template>
  <Form
    v-model="model"
    :validation-schema="validationSchema"
    :class="$style.ordersForm"
    @submit="handleSubmit"
  >
    <div
      :class="[
        $style.playerOverlay,
        !showBlockingCap && $style.hidden,
      ]"
      @click="onBlockingCapClick"
    >
      <transition
        mode="out-in"
        name="orderFormCapTextTransition"
      >
        <UiTypography
          v-if="isEmulatorPlaying"
          :text="t('emulator.player.orderInteractionsWarning')"
          :state="['accent1', 'alignCenter', 'bold']"
          size="title1"
        />
        <UiTypography
          v-else-if="isActiveOrdersForCurrentPairExists"
          :text="t('emulator.player.orderExistsFormCap')"
          :state="['accent1', 'alignCenter', 'bold']"
          size="title1"
        />
      </transition>
    </div>
    <OrderFromContainer>
      <template
        #orderDirectionSelector="{
          selectOptionClass
        }"
      >
        <FormSelector
          :state="['mdSize', 'secondaryColor5']"
          :options="orderDirectionOptions"
          name="side"
        >
          <template #option="{ option }">
            <div :class="selectOptionClass">
              <UiIcon :icon="option.icon" />
              {{ option.label }}
            </div>
          </template>
        </FormSelector>
      </template>
      <template #tabs="{ tabContentClass, tabsClass }">
        <UiTabs
          v-model="settingsActiveTab"
          :tabs="settingsTabs"
          :selector-props="{
            state: ['primaryColor2', 'mdSize'],
            thickening: 2,
          }"
          :class="tabsClass"
          :content-class="tabContentClass"
        >
          <template #tab(input)>
            <OrderFormInputPart>
              <template #submit>
                <UiButton
                  type="submit"
                  :state="['gradientColor', 'interactive']"
                  size="md"
                  :class="$style.submit"
                  :is-loading="isLoading"
                >
                  {{ t('order.submit') }}
                </UiButton>
              </template>
            </OrderFormInputPart>
          </template>
          <template #tab(tp)>
            <OrderFormTakeProfitPart
              @take-profits-amount-input="autoCalculateTakeProfits"
              @submit="openTab('input')"
            />
          </template>
          <template #tab(sl)>
            <OrderFormStopLossPart @submit="openTab('input')" />
          </template>
        </UiTabs>
      </template>
    </OrderFromContainer>
  </Form>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  provide,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiButton } from '@terminal/uikit/components/button';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiTabs, Tab } from '@terminal/uikit/components/tabs';

import OrderFromContainer from '@/containers/orderFormContainer/OrderFormContainer.vue';
import { Form, FormSelector } from '@/form';

import { useOrderCreate } from '@/hooks/useOrderCreate';
import { OrderFormInjectionKey, OrderFormTab } from '@/components/orderForm/index';

import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';
import OrderFormInputPart from './composables/orderFormInputPart/OrderFormInputPart.vue';
import OrderFormTakeProfitPart from './composables/orderFormTakeProfitPart/OrderFormTakeProfitPart.vue';
import OrderFormStopLossPart from './composables/orderFormStopLossPart/OrderFormStopLossPart.vue';

const { t } = useI18n();

const emulatorStore = useEmulatorStore();
const {
  isPlaying: isEmulatorPlaying,
} = storeToRefs(emulatorStore);

const marketStore = useMarketStore();
const {
  isActiveOrdersForCurrentPairExists,
} = storeToRefs(marketStore);

const settingsActiveTab = ref<OrderFormTab>('input');
const openTab = (tab: OrderFormTab) => {
  settingsActiveTab.value = tab;
};

const onBlockingCapClick = () => {
  if (!isEmulatorPlaying.value) return;
  emulatorStore.turnOffPlayer();
};

const orderCreateState = useOrderCreate();
const {
  model,
  validationSchema,
  orderDirectionOptions,
  isTakeProfitsEnabled,
  activePairData,
  baseCurrencyStep,
  price,
  leverage,
  autoCalculateTakeProfits,
  isStopLossEnabled,
  isLoading,
  handleSubmit,
} = orderCreateState;
provide(OrderFormInjectionKey, orderCreateState);

const settingsTabs = computed<Tab<OrderFormTab>[]>(() => [
  {
    label: t('order.additionalSettings.input'),
    value: 'input',
  },
  {
    label: t('order.additionalSettings.tp'),
    value: 'tp',
    activeState: 'accent1TextColor',
    ...(isTakeProfitsEnabled.value ? {
      state: 'primaryTextColor',
    } : {}),
  },
  {
    label: t('order.additionalSettings.sl'),
    value: 'sl',
    activeState: 'accent1TextColor',
    ...(isStopLossEnabled.value ? {
      state: 'danger2TextColor',
    } : {}),
  },
  // {
  //   label: t('order.additionalSettings.slx'),
  //   value: 'slx',
  // },
]);

const showBlockingCap = computed(
  () => [
    isEmulatorPlaying.value,
    isActiveOrdersForCurrentPairExists.value,
  ].some(Boolean),
);
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.ordersForm {
  height: 100%;
  position: relative;
}

.playerOverlay {
  cursor: pointer;
  position: absolute;
  inset: 0;
  z-index: 10;
  backdrop-filter: blur(20px);
  background-color: rgba(var(--color-background-1), 0.7);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  transition: opacity 250ms;
  &.hidden {
    pointer-events: none;
    opacity: 0;
  }
}

.tabs {
  margin-top: 22px;
  flex-grow: 1;
}

.orderSideOption {
  display: flex;
  align-items: center;
  gap: 5px;
}

.settingsTabsContent {
  margin: 0 -22px;
}

.tab {
  height: 100%;
}
</style>

<style lang="scss">
.orderFormCapTextTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
