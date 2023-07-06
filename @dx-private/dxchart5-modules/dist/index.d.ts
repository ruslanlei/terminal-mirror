/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
export interface ChartModule {
    attach: AttachChartModule;
}
interface AttachChartModule {
    <T extends ChartBootstrap>(_chartInstance: T): T;
}
interface ChartModules {
    drawings: ChartModule;
    studies: ChartModule;
    equivolume: ChartModule;
    heikinAshi: ChartModule;
    news: ChartModule;
}
export declare const modules: ChartModules;
export {};
