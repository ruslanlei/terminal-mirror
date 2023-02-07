import { SelectorOption } from '@/components/core/selector';

export type MainSelectorOptionValue = 'orders' | 'statistics';

export type MainSelectorOptions = SelectorOption<
  MainSelectorOptionValue
>[];

export type OrdersSelectorOptionValue = 'active' | 'closed';
export type OrdersSelectorOptions = SelectorOption<
  OrdersSelectorOptionValue
>[];

export type StatisticsSelectorOptionValue = 'common' | 'orders';
export type StatisticsSelectorOptions = SelectorOption<
  StatisticsSelectorOptionValue
>[];
