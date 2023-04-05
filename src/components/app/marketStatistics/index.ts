export type MarketStatisticsType = 'common' | 'orders';

export interface MarketStatisticsProps {
  activeChapter: MarketStatisticsType,
}

export interface MarketStatisticsEmits {
  (e: 'update:activeChapter', value: MarketStatisticsType): void,
}
