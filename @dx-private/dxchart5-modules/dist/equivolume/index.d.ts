/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { ChartModule } from '..';
import { DrawingsComponent } from '../drawings/DrawingsComponent';
import { EquivolumeComponent } from './EquivolumeComponent';
import { ChartWithEquivolume } from './EquivolumeConfig';
type ChartCore = {
    drawingsComponent?: DrawingsComponent;
} & ChartBootstrap;
export declare const attachEquivolumeComponent: <T extends ChartCore>(_chartInstance: T) => T & ChartBootstrap & {
    drawingsComponent?: DrawingsComponent | undefined;
    equivolumeComponent: EquivolumeComponent;
    config: import("./EquivolumeConfig").FullChartConfigEquivolume;
};
export declare const Equivolume: ChartModule;
export {};
