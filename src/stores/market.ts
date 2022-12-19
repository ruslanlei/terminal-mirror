import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const marketType = useStorage<MarketType>('marketType', 'emulator');

  return {
    marketType,
  };
});
