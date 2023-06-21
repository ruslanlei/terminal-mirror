<template>
  <Input
    ref="input"
    v-bind="props"
    v-model="value"
    :error="error"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template
      v-if="'label' in $slots || label"
      #label="data"
    >
      <slot
        name="label"
        v-bind="data"
      />
    </template>
  </Input>
</template>

<script setup lang="ts">
import Input from '@/components/core/input/Input.vue';
import { useActiveField } from '@/hooks/useActiveField';
import { DefaultFormKey } from '@/form';
import { ref } from 'vue';
import { FormInputProps } from './index';

const props = withDefaults(
  defineProps<FormInputProps>(),
  {
    isDisabled: false,
    formKey: 'default' as DefaultFormKey,
  },
);
const emit = defineEmits([
  'input',
  'focus',
  'blur',
]);

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

const onInput = () => {
  if (props.isDisabled) return;
  activeFieldOnInput();
  emit('input');
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

defineExpose({
  focus,
});
</script>
