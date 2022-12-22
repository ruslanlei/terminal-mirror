<template>
  <Dropdown>
    <template #trigger>
      <button>
        {{ localValue }}
      </button>
    </template>
    <template #dropdown>
      <FlatPickr
        v-model="localValue"
        :config="{
          inline: true,
          dateFormat: 'Z'
        }"
      />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { useLocalValue } from '@/hooks/useLocalValue';
import Dropdown from '@/components/core/dropdown/Dropdown.vue';
import { DatepickerEmits, DatepickerProps } from './index';

const props = defineProps<DatepickerProps>();

const emit = defineEmits<DatepickerEmits>();

const localValue = useLocalValue(props, emit, 'modelValue');
</script>

<style lang="scss" module>
:global {
  .flatpickr-input {
    visibility: hidden;
  }
}
</style>
