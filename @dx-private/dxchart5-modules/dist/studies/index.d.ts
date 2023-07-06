/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { StudiesComponent } from './StudiesComponent';
import { ChartWithStudies } from './StudiesConfig';
import { ChartModule } from '../index';
export declare const attachStudiesComponent: <T extends ChartBootstrap>(_chartInstance: T) => T & {
    studiesComponent: StudiesComponent;
    config: import("./StudiesConfig").FullChartConfigStudies;
} & ChartBootstrap;
export declare const Studies: ChartModule;
