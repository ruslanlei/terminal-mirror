/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartInstrument } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.component';
/**
 * Main instrument model.
 * @doc-tags model
 */
export interface Instrument {
    description?: string;
    symbol: string;
    type: string;
    /**
     * defines possible price step values on price axis
     */
    priceIncrements: number[];
    tradingHours?: string;
    tradable?: boolean;
}
export declare const instrumentToChartInstrument: (instrument: Instrument) => ChartInstrument;
export declare const fromChartInstrument: (instrument: ChartInstrument) => Instrument;
export declare const getEmptyInstrument: () => {
    description: string;
    symbol: string;
    type: string;
    priceIncrements: never[];
};
export declare const isForex: (instrument?: Instrument) => boolean;
export declare const isStock: (instrument?: Instrument) => boolean;
export declare const createInstrumentFromSymbol: (symbol: string) => Instrument;
