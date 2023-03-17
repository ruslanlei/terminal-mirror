<template>
  <div :class="$style.faq">
    <Typography
      size="massive2"
      :state="['alignCenter', 'accent1', 'bold']"
    >
      {{ t('courseLanding.faq.heading') }}
    </Typography>
    <div :class="$style.content">
      <InlineDropdown
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
          <Typography
            size="h2"
            :state="['accent1', 'semiBold']"
          >
            {{ label }}
          </Typography>
        </template>
        <template #content>
          <Typography
            size="h3"
            state="accent1"
          >
            {{ text }}
          </Typography>
        </template>
      </InlineDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { uuid } from '@/utils/uuid';
import InlineDropdown from '@/components/core/inlineDropdown/InlineDropdown.vue';
import Typography from '@/components/app/typography/Typography.vue';
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
