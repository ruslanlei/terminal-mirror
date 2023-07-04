<template>
  <UiDepositInput
    v-bind="props"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { UiDepositInput } from '@terminal/uikit/components/depositInput';
import { useActiveField } from '@/hooks/useActiveField';
import { FormDepositInputProps } from './index';

const props = withDefaults(
  defineProps<FormDepositInputProps>(),
  {
    formKey: 'default',
  },
);

const { value } = useActiveField(props.formKey, props.name);
</script>
