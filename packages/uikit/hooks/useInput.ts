import {
  ref,
  computed,
} from 'vue';
import { inputType } from '../components/input';

export const useInput = (
  props: Record<any, any>,
  emit: any,
) => {
  const localValue = computed({
    get: () => props.modelValue,
    set: (value: any) => emit('update:modelValue', value),
  });

  const isPasswordVisible = ref(false);
  const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  const computedType = computed(() => {
    if (!props.type) return inputType.TEXT;
    if (props.type !== inputType.PASSWORD) return props.type;
    return isPasswordVisible.value ? inputType.TEXT : inputType.PASSWORD;
  });

  const onInput = (event: InputEvent) => {
    emit('input', event);
  };

  const isFocused = ref<boolean>(false);
  const onFocus = (event: InputEvent) => {
    if (props.isDisabled) return;
    isFocused.value = true;
    emit('focus', event);
  };

  const onBlur = (event: InputEvent) => {
    isFocused.value = false;
    emit('blur', event);
  };

  return {
    localValue,
    isPasswordVisible,
    togglePassword,
    computedType,
    onInput,
    isFocused,
    onFocus,
    onBlur,
    focus,
  };
};
