import { post } from '@/api';

export interface SignInDTO {
  username: string,
  email: string,
  password: string,
}

export type SignInModel = Omit<SignInDTO, 'username'>;

export const signIn = (model: SignInModel) => post('/auth/signIn', {
  ...model,
  username: model.email.replace('@', '_'),
});
