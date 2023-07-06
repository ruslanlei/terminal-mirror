/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartCandleData, InternalChartDataProvider } from '../../chart-data-provider';
export declare const toCandlesFromPartial: (data: PartialCandle) => ChartCandleData;
export declare const createMockChartRealDataProvider: () => InternalChartDataProvider;
interface PartialCandle {
    c: number;
    h: number;
    l: number;
    o: number;
    v: number;
    t: number;
}
export {};
