<template>
  <div :class="$style.faq">
    <UiTypography
      size="massive2"
      :state="['alignCenter', 'accent1', 'bold']"
    >
      {{ t('terminalLanding.faq.label') }}
    </UiTypography>
    <div :class="$style.content">
      <UiInlineDropdown
        v-for="{ id, label, text } in faqList"
        :key="id"
        size="lg"
        :state="[
          'gradientPurpleTriggerOnActive',
          'background3TriggerColor',
          'background2BodyColor'
        ]"
        :gap="20"
        :class="$style.faqItem"
      >
        <template #trigger>
          <UiTypography
            size="h2"
            :state="['accent1', 'semiBold']"
          >
            {{ label }}
          </UiTypography>
        </template>
        <template #content>
          <UiTypography
            size="h3"
            state="accent1"
          >
            {{ text }}
          </UiTypography>
        </template>
      </UiInlineDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiInlineDropdown } from '@terminal/uikit/components/inlineDropdown';
import { uuid } from '@terminal/common/utils/uuid';
import { FaqItem } from './index';

const { t } = useI18n();

const faqList = computed<FaqItem[]>(() => [
  {
    id: uuid(),
    label: t('terminalLanding.faq.beginner.label'),
    text: t('terminalLanding.faq.beginner.text'),
  },
  {
    id: uuid(),
    label: t('terminalLanding.faq.coins.label'),
    text: t('terminalLanding.faq.coins.text'),
  },
  {
    id: uuid(),
    label: t('terminalLanding.faq.emulator.label'),
    text: t('terminalLanding.faq.emulator.text'),
  },
  {
    id: uuid(),
    label: t('terminalLanding.faq.realMarket.label'),
    text: t('terminalLanding.faq.realMarket.text'),
  },
  {
    id: uuid(),
    label: t('terminalLanding.faq.outOfVirtualCurrency.label'),
    text: t('terminalLanding.faq.outOfVirtualCurrency.text'),
  },
]);
</script>

<style lang="scss" module>
.faq {

}

.content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 80px;
}

.faqItem {
  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>
