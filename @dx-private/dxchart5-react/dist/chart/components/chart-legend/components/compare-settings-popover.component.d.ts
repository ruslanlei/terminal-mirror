/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { DataSeriesType } from '@dx-private/dxchart5-light/dist/chart/model/data-series.config';
import React from 'react';
import { ChartLegendSecondarySeriesModel } from '../../../view-models/chart-legend.view-model';
export interface CompareSettingsPopoverProps {
    readonly position: Point;
    readonly isOpened: boolean;
    readonly anchorRef: React.MutableRefObject<HTMLElement | null>;
    readonly series: ChartLegendSecondarySeriesModel;
    readonly palette: string[];
    readonly onUpdateSeries: (series: ChartLegendSecondarySeriesModel) => void;
    readonly onRequestClose: () => void;
}
declare const AVAILABLE_CHART_TYPES: readonly ["area", "line"];
type ChartTypeLegend = typeof AVAILABLE_CHART_TYPES[number];
export declare function isAvalibleChartType(value: DataSeriesType): value is ChartTypeLegend;
export declare const CompareSettingsPopover: React.MemoExoticComponent<(props: CompareSettingsPopoverProps) => JSX.Element>;
export {};
