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
  modelValue: Record<any, any>;
  validationSchema: any;
  submitOnEnter: boolean;
  permanent?: boolean;
  touchBy?: touchTrigger;
  externalErrors?: any;
}

export interface FormEmits {
  (e: 'update:modelValue', value: Record<any, any>): void,
  (e: 'validate', value: boolean): void,
  (e: 'submit'): void,
}
