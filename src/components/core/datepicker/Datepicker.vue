<template>
  <FlatPickr v-model="localValue" />
</template>

<script setup lang="ts">
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { useLocalValue } from '@/hooks/useLocalValue';
import { DatepickerEmits, DatepickerProps } from './index';

const props = defineProps<DatepickerProps>();

const emit = defineEmits<DatepickerEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');
</script>

<style lang="scss" module>
</style>
