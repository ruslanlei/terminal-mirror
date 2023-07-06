<template>
  <UiDatepicker
    v-bind="props"
    v-model="localValue"
    :locale="locale"
    @trigger-click="emit('triggerClick', $event)"
  />
</template>

<script setup lang="ts">
import { UiDatepicker, DatepickerProps, DatepickerEmits } from '@terminal/uikit/components/datepicker';
import { storeToRefs } from 'pinia';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { useI18nStore } from '@/stores/i18n';

const props = defineProps<DatepickerProps>();

const emit = defineEmits<DatepickerEmits>();

const localValue = useLocalValue<string>(props, emit, 'modelValue');

const i18nStore = useI18nStore();
const {
  locale,
} = storeToRefs(i18nStore);
</script>
