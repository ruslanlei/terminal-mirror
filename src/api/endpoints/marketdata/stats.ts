import { get } from '@/api';
import { PairServerData } from '@/api/types/pairServerData';

export const getPairs = () => get<PairServerData[]>('/marketdata/stats');
