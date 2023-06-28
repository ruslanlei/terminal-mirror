import { PairStat } from '@/components/pairStatsColumn';

export { default as UiPairStats } from '@/components/pairStats/PairStats.vue';

export type IPairStats = Array<PairStat[]>;

export interface PairStatsProps {
  coin: string,
  stats: IPairStats,
}
