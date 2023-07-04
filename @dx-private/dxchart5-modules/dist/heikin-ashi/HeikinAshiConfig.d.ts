/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { DrawingsComponent } from '../drawings/DrawingsComponent';
import { FullChartColors } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { PriceMovement } from '@dx-private/dxchart5-light/dist/chart/model/candle-series.model';
export declare const HEIKIN_ASHI = "heikinAshi";
declare module '@dx-private/dxchart5-light/dist/chart/chart.config' {
    interface BarTypes {
        [HEIKIN_ASHI]: unknown;
    }
}
export type ChartWithHeikinAshi = ChartBootstrap & {
    drawingsComponent?: DrawingsComponent;
};
export declare const resolveColorForLastCandle: (priceMovement: PriceMovement, colors: FullChartColors) => string;
