<template>
  <Selector
    v-model="value"
    v-bind="props"
  />
</template>

<script setup lang="ts">
import Selector from '@/components/core/selector/Selector.vue';
import { FormSelectorProps } from '@/components/form/composables/formSelector/index';
import { useActiveField } from '@/hooks/useActiveField';

const props = withDefaults(
  defineProps<FormSelectorProps>(),
  {
    formKey: 'default',
  },
);

const {
  value,
} = useActiveField(props.formKey, props.name);
</script>
