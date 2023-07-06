import { PairStat } from '@/components/pairStatsColumn';

export { default as UiPairStats } from './PairStats.vue';

export type IPairStats = Array<PairStat[]>;

export interface PairStatsProps {
  coin: string,
  stats: IPairStats,
}
