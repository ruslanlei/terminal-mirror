<template>
  <UiSelector
    v-model="value"
    v-bind="props"
  >
    <template #option="payload">
      <slot
        name="option"
        v-bind="payload"
      />
    </template>
  </UiSelector>
</template>

<script setup lang="ts">
import { UiSelector } from '@terminal/uikit/components/selector';
import { useActiveField } from '@/hooks/useActiveField';
import { FormSelectorProps } from './index';

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
