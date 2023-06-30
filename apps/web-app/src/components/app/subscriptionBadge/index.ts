import { RouteLocationRaw } from 'vue-router';

export interface SubscriptionBadgeProps {
  state: 'paid' | 'unpaid',
  paidUntil?: string,
  to?: RouteLocationRaw,
}
