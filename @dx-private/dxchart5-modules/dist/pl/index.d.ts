/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { PLChart } from './PLChartConfig';
export declare const attachPLComponent: <T extends ChartBootstrap>(_chartInstance: T) => T & ChartBootstrap & {
    config: import("./PLChartConfig").FullPLChartConfig;
};
