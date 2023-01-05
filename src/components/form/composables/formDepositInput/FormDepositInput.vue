<template>
  <DepositInput />
</template>

<script setup lang="ts">
import DepositInput from '@/components/core/depositInput/DepositInput.vue';
import { useActiveField } from '@/hooks/useActiveField';
import { FormDepositInputProps } from '@/components/form/composables/formDepositInput/index';

const props = withDefaults(
  defineProps<FormDepositInputProps>(),
  {
    formKey: 'default',
  },
);

const { value } = useActiveField(props.formKey, props.name);
</script>
