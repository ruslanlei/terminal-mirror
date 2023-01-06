<template>
  <ExchangeInput
    v-model="value"
    :error="error"
    :max="max"
    :min="min"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template #quoteCurrencyName>
      <slot name="quoteCurrencyName" />
    </template>
  </ExchangeInput>
</template>

<script setup lang="ts">
import ExchangeInput from '@/components/core/exchangeInput/ExchangeInput.vue';
import { FormExchangeInputEmits, FormExchangeInputProps } from '@/components/form/composables/formExchangeInput/index';
import { useActiveField } from '@/hooks/useActiveField';

const props = withDefaults(
  defineProps<FormExchangeInputProps>(),
  {
    formKey: 'default',
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
