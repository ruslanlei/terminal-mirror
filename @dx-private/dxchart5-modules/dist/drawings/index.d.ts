/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { ChartModule } from '..';
import { DrawingsComponent } from './DrawingsComponent';
import { ChartWithDrawings } from './DrawingsConfig';
type ChartCore = {
    drawingsComponent?: DrawingsComponent;
} & ChartBootstrap;
export declare const attachDrawingsComponent: <T extends ChartCore>(_chartInstance: T) => T & ChartBootstrap & {
    drawingsComponent: DrawingsComponent;
    config: import("./DrawingsConfig").FullChartConfigDrawings;
};
export declare const Drawings: ChartModule;
export {};
