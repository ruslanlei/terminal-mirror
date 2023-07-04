import { get } from '@/api';
import { Pair } from '@terminal/common/types/pair';

export const getPairs = () => get<Pair[]>('/marketdata/stats');
