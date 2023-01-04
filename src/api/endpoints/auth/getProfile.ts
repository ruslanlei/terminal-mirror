import { get } from '@/api';
import { Profile } from '@/api/types/profile';

export const getProfile = () => get<Profile>('/auth/user/');
