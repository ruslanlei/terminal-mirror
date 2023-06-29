export { default as UiCoinLogo } from './CoinLogo.vue';
export { default as UiCoinLogoMap } from './CoinLogoMap.vue';

export interface CoinLogoProps {
  coin: string,
  state: 'circle' | 'square',
}
