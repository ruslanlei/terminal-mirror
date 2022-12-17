import { get } from '@/api';

export interface Profile {
  pk: 0,
  username: string,
  email: string,
  first_name: string,
  last_name: string,
}

export const getProfile = () => get<Profile>('/auth/user/');
