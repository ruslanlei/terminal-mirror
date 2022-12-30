import { get } from '@/api';

// export type Currency =
//   'BTC'
//   | 'ETH'
//   | 'BNB'
//   | 'tether'
//   | 'dash'
//   | 'achain'
//   | 'bread'
//   | 'asch'
//   | 'ltc'
//   | 'iot'
//   | 'cobinhood'

export enum Currency {
  BTC = 'BTC',
  ETH = 'ETH',
  BNB = 'BNB',
}

export interface Pair {
  id: number,
  alias: string,
  base: Currency,
  quote: string,
  from_date: string,
  to_date: string,
  total_trades: number,
}

export const getPairs = () => get<Pair[]>('/marketdata/stats');
