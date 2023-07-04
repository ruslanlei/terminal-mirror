/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartComponent } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.component';
import { DrawingsComponent } from '../drawings/DrawingsComponent';
import { YAxisComponent } from '@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis.component';
export declare class HeikinAshiComponent {
    constructor(chartComponent: ChartComponent, yAxisComponent: YAxisComponent, drawingsComponent?: DrawingsComponent);
}
