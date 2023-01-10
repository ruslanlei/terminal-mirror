<template>
  <Dropdown
    v-model:is-visible="isCalendarVisible"
    :placement="placement"
    :container-gap="20"
    :distance="16"
  >
    <template #trigger>
      <button :class="[$style.trigger, $style[state]]">
        {{ displayValue }}
        <Icon
          :class="$style.icon"
          icon="calendar"
          :size="24"
        />
      </button>
    </template>
    <template #dropdown>
      <div :class="$style.calendarWrapper">
        <FlatPickr
          v-model="localValue"
          :config="computedConfig"
        />
      </div>
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
import Icon from '@/components/core/icon/Icon.vue';
import { computed, ref, watch } from 'vue';
import { useI18nStore } from '@/stores/i18n';
import { storeToRefs } from 'pinia';
import { AppLocale } from '@/i18n';
import { DatepickerEmits, DatepickerProps } from './index';

const props = withDefaults(
  defineProps<DatepickerProps>(),
  {
    state: 'default',
    placement: 'top',
  },
);

const emit = defineEmits<DatepickerEmits>();

const localValue = useLocalValue<string>(props, emit, 'modelValue');

const i18nStore = useI18nStore();
const {
  locale,
} = storeToRefs(i18nStore);

const localesMap: Record<AppLocale, any> = {
  wru: Russian,
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
    month: 'short',
    year: 'numeric',
  },
));
const defaultFormatter = (date: string) => computedIntl.value.format(new Date(date));

const formatter = computed(() => props.displayDataFormatter || defaultFormatter);

const displayValue = ref('');
watch([localValue, computedIntl], () => {
  displayValue.value = formatter.value(localValue.value);
}, { immediate: true });

const isCalendarVisible = ref(false);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.calendarWrapper {
  background-color: rgb(var(--color-background-2));
  padding: 10px;
  border-radius: 10px;
}

:global {
  .flatpickr-input {
    display: none;
  }
  .flatpickr-calendar {
    background-color: transparent;
    box-shadow: none;
  }
  .flatpickr-current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    .flatpickr-monthDropdown-months {
      color: rgb(var(--color-accent-1));
      background-color: rgb(var(--color-background-2)) !important;
      border: none;
      @include title2;
      font-weight: 600;
    }
    .numInputWrapper {
      .numInput {
        color: rgb(var(--color-accent-1));
        @include title2;
      }
    }
  }
  .flatpickr-weekday {
    color: rgb(var(--color-accent-1)) !important;
    @include title3;
    font-weight: 500 !important;
  }
  .flatpickr-weekdays {
    margin-top: 16px;
  }
  .flatpickr-day {
    color: rgb(var(--color-accent-1));
    border: none;
    font-weight: 600;
    &:hover {
      color: rgb(var(--color-accent-1));
      background-color: rgb(var(--color-background-1));
    }
    &.prevMonthDay, &.nextMonthDay {
      color: rgba(var(--color-accent-1), 0.1);
      &:hover {
        background-color: rgb(var(--color-background-1));
      }
    }
    &.selected {
      background: var(--color-main-gradient);
      &:hover, &:focus {
        background: var(--color-main-gradient);
      }
    }
    &.today {
      &:hover {
        background-color: rgb(var(--color-background-3));
      }
    }
  }
  .flatpickr-months  {
    .flatpickr-prev-month, .flatpickr-next-month  {
      svg {
        fill: rgb(var(--color-accent-1)) !important;
      }
    }
  }
}

.trigger {
  cursor: pointer;
}

.icon {
  margin-left: 13px;
}

.default {
  &.trigger {
    display: flex;
    align-items: center;
    color: rgb(var(--color-accent-1));
    @include title3;
    font-weight: 500;
  }
}
</style>
