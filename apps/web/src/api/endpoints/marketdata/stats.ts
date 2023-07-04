import { Pair } from '@/api/types/pair';
import { get } from '@/api';

export const getPairs = () => get<Pair[]>('/marketdata/stats');
