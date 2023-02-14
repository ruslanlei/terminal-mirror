import { get } from '@/api';
import { PairData } from '@/api/types/pair';

export const getPairs = () => get<PairData[]>('/marketdata/stats');
