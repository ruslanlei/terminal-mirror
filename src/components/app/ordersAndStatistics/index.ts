import { SelectorOption } from '@/components/core/selector';
import { OrdersListType } from '@/components/app/ordersList';

export type MainSelectorOptionValue = 'orders' | 'statistics';

export type MainSelectorOptions = SelectorOption<
  MainSelectorOptionValue
>[];

export type OrdersSelectorOptions = SelectorOption<
  OrdersListType
>[];

export type StatisticsSelectorOptionValue = 'common' | 'orders';
export type StatisticsSelectorOptions = SelectorOption<
  StatisticsSelectorOptionValue
>[];
