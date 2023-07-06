import { post } from '@/api';

export interface ResetPasswordDTO {
  email: string,
}

export const resetPassword = (
  dto: ResetPasswordDTO,
) => post('/auth/password/reset/', dto);
