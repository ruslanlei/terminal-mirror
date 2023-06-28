export { default as UiCoinLogo } from '@/components/coinLogo/CoinLogo.vue';
export interface CoinLogoProps {
  coin: string,
  state: 'circle' | 'square',
}
