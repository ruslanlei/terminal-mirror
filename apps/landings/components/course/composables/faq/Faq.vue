<template>
  <div :class="$style.faq">
    <UiTypography
      size="massive2"
      :state="['alignCenter', 'accent1', 'bold']"
    >
      {{ t('courseLanding.faq.heading') }}
    </UiTypography>
    <div :class="$style.content">
      <UiInlineDropdown
        v-for="{ id, label, text } in faqList"
        :key="id"
        size="lg"
        :state="[
          'gradientBlueTriggerOnActive',
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
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiInlineDropdown } from '@terminal/uikit/components/inlineDropdown';
import { uuid } from '@terminal/common/utils/uuid';
import { FaqItem } from './index';

const { t } = useI18n();

const faqList = computed<FaqItem[]>(() => [
  {
    id: uuid(),
    label: t('courseLanding.faq.trainingQuestion.label'),
    text: t('courseLanding.faq.trainingQuestion.text'),
  },
  {
    id: uuid(),
    label: t('courseLanding.faq.learningTerminalQuestion.label'),
    text: t('courseLanding.faq.learningTerminalQuestion.text'),
  },
  {
    id: uuid(),
    label: t('courseLanding.faq.historyTradingQuestion.label'),
    text: t('courseLanding.faq.historyTradingQuestion.text'),
  },
  {
    id: uuid(),
    label: t('courseLanding.faq.moneyAndQuotesQuestion.label'),
    text: t('courseLanding.faq.moneyAndQuotesQuestion.text'),
  },
  {
    id: uuid(),
    label: t('courseLanding.faq.runOutOfCurrencyQuestion.label'),
    text: t('courseLanding.faq.runOutOfCurrencyQuestion.text'),
  },
  {
    id: uuid(),
    label: t('courseLanding.faq.isThereGuarantee.label'),
    text: t('courseLanding.faq.isThereGuarantee.text'),
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
