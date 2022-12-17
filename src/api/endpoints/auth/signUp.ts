import { post } from '@/api';

export interface SignUpDTO {
  username: string,
  email: string,
  password1: string,
  password2: string,
}

export type SignUpModel = Omit<SignUpDTO, 'password1' | 'password2'> & {
  password: string,
}

export const signUp = ({
  username,
  email,
  password,
}: SignUpModel) => {
  const dto: SignUpDTO = {
    username,
    email,
    password1: password,
    password2: password,
  };

  return post('/auth/signup/', dto);
};
