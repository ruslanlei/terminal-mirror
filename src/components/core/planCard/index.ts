import { RouteLocationRaw } from 'vue-router';

export interface LandingPlan {
  headerText: {
    h1?: string,
    textLg?: string,
    text?: string,
  },
  salePercents?: number,
  additionalBenefits?: string[],
  name: string,
  benefits: {
    label: string,
    active: boolean,
  }[],
  price: number | string,
  trialLink?: RouteLocationRaw,
  purchaseButton?: string,
  subscribeLink?: RouteLocationRaw,
}

export interface PlanCardProps {
  state: 'purple' | 'orange' | 'blue'
  card: LandingPlan,
}

export interface PlanCardEmits {
  (e: 'clickSubscribe'): void,
  (e: 'clickPurchase'): void,
}
