export interface TerminalPlan {
  headerText: {
    h1?: string,
    textLg?: string,
    text?: string,
  },
  name: string,
  benefits: {
    label: string,
    active: boolean,
  }[],
  price: {
    value: number,
    withoutSale: number,
  }
}

export interface PlanCardProps {
  state: 'purple' | 'orange' | 'blue'
  card: TerminalPlan,
}
