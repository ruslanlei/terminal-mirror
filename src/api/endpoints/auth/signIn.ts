import { post } from '@/api';

export interface SignInDTO {
  username: string,
  email: string,
  password: string,
}

export type SignInModel = Omit<SignInDTO, 'username'>;

export interface SingInResponse {
  key: string,
}

export const signIn = (model: SignInModel) => post<SingInResponse>('/auth/login/', {
  ...model,
  username: model.email.replace('@', '_'),
});
