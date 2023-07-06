<template>
  <ExchangeInput
    v-model="value"
    v-bind="props"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template #quoteCurrency>
      <slot name="quoteCurrency" />
    </template>
  </ExchangeInput>
</template>

<script setup lang="ts">
import ExchangeInput from '@terminal/uikit/components/exchangeInput/ExchangeInput.vue';
import { FormExchangeInputEmits, FormExchangeInputProps } from '@/form/composables/formExchangeInput/index';
import { useActiveField } from '@/hooks/useActiveField';

const props = withDefaults(
  defineProps<FormExchangeInputProps>(),
  {
    formKey: 'default',
    saveOn: 'input',
  },
);

const emit = defineEmits<FormExchangeInputEmits>();

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
