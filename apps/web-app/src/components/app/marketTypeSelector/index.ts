import { SelectorOption } from '@/components/core/selector';
import { MarketType } from '@/stores/market';

export interface MarketTypeSelectorOption extends SelectorOption {
  value: MarketType,
  icon: string,
}
