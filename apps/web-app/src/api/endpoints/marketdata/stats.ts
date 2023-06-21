import { get } from '@/api';
import { Pair } from '@/api/types/pair';

export const getPairs = () => get<Pair[]>('/marketdata/stats');
