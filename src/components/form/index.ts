// import { BaseSchema } from 'yup';

export { default as Form } from './Form.vue';
export * from './composables';

export enum touchTrigger {
  BLUR = 'blur',
  FOCUS = 'focus',
  INPUT = 'input'
}

export type DefaultFormKey = 'default';

export interface FormProps {
  formKey: string;
  modelValue: Record<any, any>,
  validationSchema: any;
  permanent?: boolean,
  touchBy?: touchTrigger,
  submitOnEnter: boolean,
}

export interface FormEmits {
  (e: 'update:modelValue', value: Record<any, any>): void,
  (e: 'validate', value: boolean): void,
  (e: 'submit'): void
}
