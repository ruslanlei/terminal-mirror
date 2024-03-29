<template>
  <UiCheckbox
    v-model="value"
    @toggle="onToggle"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template
      v-if="'label' in $slots || label"
      #label
    >
      <slot>
        {{ label }}
      </slot>
    </template>
  </UiCheckbox>
</template>

<script setup lang="ts">
import { UiCheckbox } from '@terminal/uikit/components/checkbox';
import { useActiveField } from '@/hooks/useActiveField';
import { DefaultFormKey } from '@/form';
import { FormCheckboxProps } from './index';

const props = withDefaults(
  defineProps<FormCheckboxProps>(),
  {
    formKey: 'default' as DefaultFormKey,
  },
);

const {
  value,
  error,
  onInput: activeFieldOnInput,
  onFocus: activeFieldOnFocus,
  onBlur: activeFieldOnBlur,
} = useActiveField(props.formKey, props.name);

const emit = defineEmits([
  'toggle',
  'focus',
  'blur',
]);

const onToggle = () => {
  if (props.isDisabled) return;
  activeFieldOnInput();
  emit('toggle');
};

const onFocus = () => {
  if (props.isDisabled) return;
  activeFieldOnFocus();
  emit('focus');
};

const onBlur = () => {
  if (props.isDisabled) return;
  activeFieldOnBlur();
  emit('blur');
};
</script>
