// import { BaseSchema } from 'yup';

export { default as Form } from './Form.vue';
export * from './composables';

export enum touchTrigger {
  BLUR = 'blur',
  FOCUS = 'focus',
  INPUT = 'input'
}

export type DefaultFormKey = 'default';

interface FormError {
  path: string,
  message: string,
}

export type FormErrorsList = FormError[];

export type FormModel = Record<any, any>;

export interface FormProps {
  formKey: string;
  modelValue: FormModel;
  validationSchema: any;
  submitOnEnter: boolean;
  permanent?: boolean;
  touchBy?: touchTrigger;
  externalErrors?: FormErrorsList;
  autocomplete?: boolean,
}

export interface FormEmits {
  (e: 'update:modelValue', value: FormModel): void,
  (e: 'update:externalErrors', value: FormErrorsList): void,
  (e: 'validate', value: boolean): void,
  (e: 'submit'): void,
}
