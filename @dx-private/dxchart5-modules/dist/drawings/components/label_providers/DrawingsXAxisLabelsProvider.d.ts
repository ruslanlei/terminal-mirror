/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import DrawingsModel from '../../model/DrawingsModel';
import { XAxisLabel, XAxisLabelsProvider } from '@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model';
import { ChartWithDrawings } from '../../DrawingsConfig';
export declare class DrawingsXAxisLabelsProvider implements XAxisLabelsProvider {
    private drawings;
    private chartInstance;
    constructor(drawings: DrawingsModel, chartInstance: ChartWithDrawings);
    getUnorderedLabels(): XAxisLabel[];
}
