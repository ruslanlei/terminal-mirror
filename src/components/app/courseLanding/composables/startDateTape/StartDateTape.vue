<template>
  <div :class="$style.startDateTape">
    <template
      v-for="n in 10"
      :key="n"
    >
      <Typography
        size="h2"
        :state="['accent1', 'nowrap', 'semiBold']"
      >
        {{ t('courseLanding.beginningDate', { date: displayDate }) }}
      </Typography>
      <div :class="$style.dot" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import { customFormatDate } from '@/utils/date';

const { t } = useI18n();

const displayDate = computed(() => customFormatDate('DD MMMM HH:mm', '2023-03-20 20:00:00'));
</script>

<style lang="scss" module>
.startDateTape {
  background: var(--color-blue-gradient);
  padding: 30px 0;
  display: flex;
  align-items: center;
  gap: 40px;
}

.dot {
  width: 10px;
  min-width: 10px;
  height: 10px;
  min-height: 10px;
  border-radius: 10px;
  background: rgba(var(--color-accent-1), 0.4);
}
</style>
