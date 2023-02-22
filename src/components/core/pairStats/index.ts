import { PairStat } from '@/components/app/pairStatsColumn';
import { PairData } from '@/api/types/pair';

export type IPairStats = Array<PairStat[]>;

export interface PairStatsProps {
  coin: PairData['base'],
  stats: IPairStats,
}
