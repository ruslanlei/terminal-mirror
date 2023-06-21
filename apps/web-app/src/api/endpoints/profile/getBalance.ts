import { get } from '@/api';

export const getBalance = () => get<{
    balance: number,
}>('/members/balance');
