<template>
  <Selector
    v-model="value"
    v-bind="props"
  >
    <template #option="payload">
      <slot
        name="option"
        v-bind="payload"
      />
    </template>
  </Selector>
</template>

<script setup lang="ts">
import Selector from '@/components/core/selector/Selector.vue';
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
