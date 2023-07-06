<template>
  <UiSelect
    v-model="value"
    :error="error"
    v-bind="props"
    @change="onChange"
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
    <template
      v-if="'trigger' in $slots"
      #trigger="data"
    >
      <slot
        name="trigger"
        v-bind="data"
      />
    </template>
    <template
      v-if="'option' in $slots"
      #option="data"
    >
      <slot
        name="option"
        v-bind="data"
      />
    </template>
  </UiSelect>
</template>

<script setup lang="ts">
import { UiSelect } from '@terminal/uikit/components/select';
import { FormSelectProps } from '@/form/composables/formSelect/index';
import { useActiveField } from '@/hooks/useActiveField';
import { DefaultFormKey } from '@/form';

const props = withDefaults(
  defineProps<FormSelectProps>(),
  {
    formKey: 'default' as DefaultFormKey,
  },
);
const emit = defineEmits<{(e: 'change'): any,
  (e: 'focus'): any,
  (e: 'blur'): any,
}>();

const {
  value,
  error,
  onInput: activeFieldOnInput,
  onFocus: activeFieldOnFocus,
  onBlur: activeFieldOnBlur,
} = useActiveField(props.formKey, props.name);

const onChange = () => {
  if (props.isDisabled) return;
  activeFieldOnInput();
  emit('change');
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
