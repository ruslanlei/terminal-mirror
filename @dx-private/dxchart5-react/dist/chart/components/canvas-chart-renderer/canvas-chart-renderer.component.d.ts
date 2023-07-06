/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FullChartConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
export declare const CanvasChartSymbol: unique symbol;
export declare const createChartInstance: (chartConfig: FullChartConfig) => import("./chart-with-modules").ChartWithModules;
