<template>
  <DepositInput
    v-bind="props"
    v-model="value"
  />
</template>

<script setup lang="ts">
import DepositInput from '@/components/core/depositInput/DepositInput.vue';
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
