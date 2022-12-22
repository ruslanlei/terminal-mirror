<template>
  <Dropdown>
    <template #trigger>
      <button>
        {{ displayValue }}
      </button>
    </template>
    <template #dropdown>
      <FlatPickr
        v-model="localValue"
        :config="computedConfig"
      />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import english from 'flatpickr/dist/l10n/default';
import { BaseOptions as FlatpickrConfig } from 'flatpickr/dist/types/options';
import { useLocalValue } from '@/hooks/useLocalValue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import { computed, ref, watch } from 'vue';
import { useI18nStore } from '@/stores/i18n';
import { storeToRefs } from 'pinia';
import { AppLocale } from '@/i18n';
import { DatepickerEmits, DatepickerProps } from './index';

const props = defineProps<DatepickerProps>();

const emit = defineEmits<DatepickerEmits>();

const localValue = useLocalValue<string>(props, emit, 'modelValue');

const i18nStore = useI18nStore();
const {
  locale,
} = storeToRefs(i18nStore);

const localesMap: Record<AppLocale, any> = {
  ru: Russian,
  en: english,
};

const computedConfig = computed<Partial<FlatpickrConfig>>(() => ({
  inline: true,
  dateFormat: 'Z',
  locale: localesMap[locale.value],
}));

const computedIntl = computed(() => new Intl.DateTimeFormat(
  locale.value,
  {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
));
const defaultFormatter = (date: string) => computedIntl.value.format(new Date(date));

const formatter = computed(() => props.displayDataFormatter || defaultFormatter);

const displayValue = ref('');
watch([localValue, computedIntl], () => {
  displayValue.value = formatter.value(localValue.value);
}, { immediate: true });
</script>

<style lang="scss" module>
:global {
  .flatpickr-input {
    visibility: hidden;
  }
}
</style>
