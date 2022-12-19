export type Currency =
  'btc'
  | 'tether'
  | 'dash'
  | 'achain'
  | 'bread'
  | 'asch'
  | 'eth'
  | 'ltc'
  | 'bnb'
  | 'iot'
  | 'cobinhood'

export interface CurrencyLogoProps {
  currency: Currency,
  state: 'circle' | 'square',
}
