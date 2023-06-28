import { PairStat } from '@/components/app/pairStatsColumn';
import { Pair } from '@/api/types/pair';

export type IPairStats = Array<PairStat[]>;

export interface PairStatsProps {
  coin: Pair['base'],
  stats: IPairStats,
}

export { default as UiPairStats } from './PairStats.vue';
