export interface AgreementCheckboxProps {
  modelValue: boolean,
}

export interface AgreementCheckboxEmits {
  (e: 'update:modelValue', value: boolean): void
}
