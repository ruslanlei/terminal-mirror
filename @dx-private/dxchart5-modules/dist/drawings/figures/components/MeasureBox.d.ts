/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExtendedContext, XPlacement, YPlacement } from '../../components/extended_context/ExtendedContext';
import { DrawingViewModel, ViewPoint } from '../../model/DrawingViewModel';
import { TextLabels } from '../Text/Text';
import { ChartWithDrawings } from '../../DrawingsConfig';
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
export interface FigureMeasureBoxProperties {
    labels?: {
        showCoefficient?: boolean;
        showPrice?: boolean;
        pricePlacement?: XPlacement;
    };
    text?: TextLabels;
    measureBox: MeasureBoxProperties;
}
export interface MeasureBoxProperties {
    showBars?: boolean;
    showTimeDiff?: boolean;
    showDistance?: boolean;
    showAngle?: boolean;
    position: 'right' | 'left' | 'center' | 'middle';
    showPriceChangeAbs?: boolean;
    showPriceChangePercent?: boolean;
    showPriceChangeDistance?: boolean;
}
export interface CalculatedMeasureBoxProperties {
    pricePlacement?: XPlacement;
    yPlacement?: YPlacement;
    yValue?: number;
}
export declare function measureBox(viewModel: DrawingViewModel, ctx: ExtendedContext, chartBootstrap: ChartWithDrawings, paneComponent: PaneComponent, properties: FigureMeasureBoxProperties, points: ViewPoint[], calculatedProperties?: CalculatedMeasureBoxProperties, isDateRange?: string): void;
