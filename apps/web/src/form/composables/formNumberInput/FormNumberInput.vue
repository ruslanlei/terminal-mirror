<template>
  <UiNumberInput
    v-model="value"
    :error="error"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template
      v-if="'append' in $slots"
      #append
    >
      <slot name="append" />
    </template>
  </UiNumberInput>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UiNumberInput } from '@terminal/uikit/components/numberInput';
import { useActiveField } from '@/hooks/useActiveField';
import { FormNumberInputProps, FormNumberInputEmits } from './index';

const props = withDefaults(
  defineProps<FormNumberInputProps>(),
  {
    formKey: 'default',
  },
);

const emit = defineEmits<FormNumberInputEmits>();

const input = ref();
const focus = () => {
  input.value.focus();
};

const {
  value,
  error,
  onInput: activeFieldOnInput,
  onFocus: activeFieldOnFocus,
  onBlur: activeFieldOnBlur,
} = useActiveField(props.formKey, props.name);

const onInput = (event: InputEvent) => {
  if (props.isDisabled) return;
  activeFieldOnInput();
  emit('input', event);
};

const onFocus = (event: InputEvent) => {
  if (props.isDisabled) return;
  activeFieldOnFocus();
  emit('focus', event);
};

const onBlur = (event: InputEvent) => {
  if (props.isDisabled) return;
  activeFieldOnBlur();
  emit('blur', event);
};

defineExpose({
  focus,
});
</script>
