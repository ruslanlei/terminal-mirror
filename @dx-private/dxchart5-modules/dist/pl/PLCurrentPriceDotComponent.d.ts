/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@dx-private/dxchart5-light/dist/chart/model/chart-base-element';
import { PLChartModel } from './PLChartModel';
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { NumericAxisLabel } from '@dx-private/dxchart5-light/dist/chart/components/labels_generator/numeric-axis-labels.generator';
export declare class PLCurrentPriceDotComponent extends ChartBaseElement {
    private plChartModel;
    constructor(plChartModel: PLChartModel);
    getLabel(): NumericAxisLabel | undefined;
    getDot(): Point | undefined;
    private isPriceOutOfChartBounds;
    private calculateDotPosition;
    private findFirstPlot;
    private calculateY;
    private interpolate;
    private calculateLabelValue;
}
