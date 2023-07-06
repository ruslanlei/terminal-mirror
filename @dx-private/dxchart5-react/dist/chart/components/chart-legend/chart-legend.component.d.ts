/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
import { Option } from 'fp-ts/Option';
import React from 'react';
import { LegendContainerRefHolder, SecondarySeriesRefHolder, SeparateVolumeRefHolder, StudySeriesRefsHolder } from '../../dom-mutation-models/chart-legend.dom-mutation-model';
import { ChartLegendSecondarySeriesModel, ConfigOHLC } from '../../view-models/chart-legend.view-model';
import { ChartWithModules } from '../canvas-chart-renderer/chart-with-modules';
import { ChartLegendMainSeriesPopoverProps } from './components/chart-legend-main-series-popover';
import { AggregationPeriod } from '../../model/aggregation.model';
import { StudiesSettingsProps } from '../studies-settings/studies-settings.component';
export interface ChartLegendDMProps {
    readonly container: LegendContainerRefHolder;
    readonly time: React.RefObject<HTMLDivElement>;
    readonly open: React.RefObject<HTMLDivElement>;
    readonly close: React.RefObject<HTMLDivElement>;
    readonly high: React.RefObject<HTMLDivElement>;
    readonly low: React.RefObject<HTMLDivElement>;
    readonly mainVolume: React.RefObject<HTMLDivElement>;
    readonly separateVolume: SeparateVolumeRefHolder;
    readonly stackedStudySeries: StudySeriesRefsHolder[];
    readonly separatedStudySeries: StudySeriesRefsHolder[];
    readonly secondarySeries: SecondarySeriesRefHolder[];
}
export interface ChartLegendComponentConfig {
    readonly opened: boolean;
    readonly showMainInstrument: boolean;
    readonly showOHLC: boolean;
    readonly showPeriod: boolean;
    readonly configOHLC: ConfigOHLC;
}
export interface ChartLegendProps {
    readonly config: ChartLegendComponentConfig;
    readonly mainInstrumentSeriesId: number;
    readonly selectedSeries: Option<number>;
    readonly popupPosition: Point;
    readonly onCloseSeries: () => void;
    readonly onUpdateSeries: (series: ChartLegendSecondarySeriesModel) => void;
    readonly onDeleteSeries: (series: ChartLegendSecondarySeriesModel) => void;
    readonly onOpenSeries: (id: number) => void;
    readonly onDeleteStudySeries: (uuid: string) => void;
    readonly onOpenedChange: (opened: boolean) => void;
    readonly showStudies: boolean;
    readonly isOpened?: boolean;
    readonly domMutationProps: ChartLegendDMProps;
    readonly showMainLegendVolumes: boolean;
    readonly showSeparateLegendVolumes: boolean;
    readonly id: string;
    readonly chartInstance: ChartWithModules;
    readonly ChartLegendMainSeriesPopover: React.FC<ChartLegendMainSeriesPopoverProps>;
    readonly period: AggregationPeriod;
    readonly mainInstrumentSymbol?: string;
    readonly studiesSettingsProps: StudiesSettingsProps;
}
export declare const ChartLegend: React.NamedExoticComponent<ChartLegendProps>;
