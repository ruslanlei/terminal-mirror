/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { ChartModule } from '..';
import { DrawingsComponent } from '../drawings/DrawingsComponent';
import { ChartWithHeikinAshi } from './HeikinAshiConfig';
type ChartCore = {
    drawingsComponent?: DrawingsComponent;
} & ChartBootstrap;
export declare const attachHeikinAshiComponent: <T extends ChartCore>(_chartInstance: T) => T & ChartBootstrap & {
    drawingsComponent?: DrawingsComponent | undefined;
};
export declare const HeikinAshi: ChartModule;
export {};
