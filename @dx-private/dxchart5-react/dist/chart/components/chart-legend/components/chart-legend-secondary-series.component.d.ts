/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import React from 'react';
import { SecondarySeriesRefHolder } from '../../../dom-mutation-models/chart-legend.dom-mutation-model';
import { ChartLegendSecondarySeriesModel } from '../../../view-models/chart-legend.view-model';
export interface ChartLegendItemProps {
    readonly popupPosition: Point;
    readonly isOpened: boolean;
    readonly onCloseSeries: () => void;
    readonly series: SecondarySeriesRefHolder;
    readonly onDeleteSeries: (series: ChartLegendSecondarySeriesModel) => void;
    readonly onOpenSeries: (id: number) => void;
    readonly palette: string[];
    readonly onUpdateSeries: (series: ChartLegendSecondarySeriesModel) => void;
    readonly testId?: string;
}
export declare const ChartLegendSecondarySeriesItem: React.MemoExoticComponent<(props: ChartLegendItemProps) => JSX.Element>;
