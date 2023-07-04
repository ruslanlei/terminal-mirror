import { computed, ref, watchEffect } from 'vue';
import {
  InputSelectOption, SelectOption, SelectProps, SelectValue,
} from '@/components/core/select';

export const useSelect = (props: SelectProps, emit: any) => {
  const localValue = computed<SelectValue>({
    get: () => props.modelValue,
    set: (value: SelectValue) => emit('update:modelValue', value),
  });

  const isMultiSelect = computed<boolean>(() => localValue.value instanceof Array);

  const displayValue = computed<any>(
    () => (Array.isArray(localValue.value)
      ? localValue.value.map(
        (optionValue: SelectOption['value']) => props.options.find(
          (option) => option.value === optionValue,
        ),
      )
      : props.options.find(
        (option: InputSelectOption) => option.value === localValue.value,
      )?.label || ''
    ),
  );

  const onSelectOption = (optionValue: SelectOption['value']) => {
    if (props.isDisabled) return;
    if (isMultiSelect.value && localValue.value instanceof Array) {
      if (localValue.value.includes(optionValue)) {
        localValue.value = localValue.value
          .filter((currentOptionValue) => currentOptionValue !== optionValue);
      } else {
        localValue.value.push(optionValue);
      }
    } else {
      localValue.value = optionValue;
    }
  };

  const query = ref('');

  const computedOptions = ref<SelectOption[]>([]);
  watchEffect(() => {
    let options = props.options.map(
      (option: InputSelectOption) => ({
        ...option,
        isSelected: isMultiSelect.value
          ? localValue.value.includes(option.value)
          : localValue.value === option.value,
      }),
    );

    if (props.isSearchable && !!query.value) {
      const clearString = (string: string) => string
        .replace(/\s/g, '')
        .toLowerCase();

      const clearQuery = clearString(query.value);
      options = options.filter(
        (option: SelectOption) => clearString(option.label).includes(clearQuery),
      );
    }

    computedOptions.value = options;
  });

  const isDropdownVisible = ref(false);
  const showDropdown = () => {
    if (props.isDisabled) return;
    isDropdownVisible.value = true;
  };
  const closeDropdown = () => {
    query.value = '';
    isDropdownVisible.value = false;
  };

  return {
    isDropdownVisible,
    showDropdown,
    closeDropdown,
    localValue,
    isMultiSelect,
    displayValue,
    onSelectOption,
    query,
    computedOptions,
  };
};
