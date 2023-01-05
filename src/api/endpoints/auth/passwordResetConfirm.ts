import { post } from '@/api';
import { ErrorResponse } from '@/api/common';

export interface ConfirmResetPasswordDTO {
  new_password1: string,
  new_password2: string,
  uid: string,
  token: string,
}

export const passwordResetConfirm = (
  dto: ConfirmResetPasswordDTO,
) => post<null | ErrorResponse>('/auth/password/reset/confirm', dto);
