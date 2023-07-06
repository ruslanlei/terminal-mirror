/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { ChartComponent } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.component';
import { DrawingsComponent } from '../drawings/DrawingsComponent';
import { XAxisComponent } from '@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis.component';
import EventBus from '@dx-private/dxchart5-light/dist/chart/events/event-bus';
import { FullChartConfigEquivolume } from './EquivolumeConfig';
import { VolumesComponent } from '@dx-private/dxchart5-light/dist/chart/components/volumes/volumes.component';
import { PaneManager } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane-manager.component';
import { YAxisComponent } from '@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis.component';
export declare class EquivolumeComponent extends ChartBaseElement {
    private eventBus;
    private chartComponent;
    private xAxisComponent;
    private yAxisComponent;
    private volumesComponent;
    private config;
    private paneManager;
    private avgMainSeriesVolume;
    private cornerVolumes;
    constructor(eventBus: EventBus, chartComponent: ChartComponent, xAxisComponent: XAxisComponent, yAxisComponent: YAxisComponent, volumesComponent: VolumesComponent, config: FullChartConfigEquivolume, paneManager: PaneManager, drawingsComponent?: DrawingsComponent);
    private updateAvgMainSeriesVolume;
    private calculateEquivolumeWidth;
    protected doActivate(): void;
    /**
     * Used to show close price for visual candles
     * For equivolume chart type only
     * @param isShow
     */
    setShowClosePrice(isShow: boolean): void;
}
