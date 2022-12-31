import { post } from '@/api';

export interface VerifyEmailDTO {
  key: string,
}

export const verifyEmail = (
  dto: VerifyEmailDTO,
) => post('/auth/signup/verify-email/', dto);
