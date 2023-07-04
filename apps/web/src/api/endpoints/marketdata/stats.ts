import { Pair } from '@terminal/common/types/pair';
import { get } from '@/api';

export const getPairs = () => get<Pair[]>('/marketdata/stats');
