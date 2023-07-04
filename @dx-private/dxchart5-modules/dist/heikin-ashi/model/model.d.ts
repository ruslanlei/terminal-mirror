/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VisualCandleCalculator } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import VisualCandle from '@dx-private/dxchart5-light/dist/chart/model/visual-candle';
export declare const heikinAhsiCandleTransformer: VisualCandleCalculator;
export declare const ohlcPriceResolver: (vc: VisualCandle) => number[];
