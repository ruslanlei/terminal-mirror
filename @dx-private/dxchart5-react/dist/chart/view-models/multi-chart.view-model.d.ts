/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/DrawingsConfig';
import { NonEmptyArray } from 'fp-ts/NonEmptyArray';
import { Option } from 'fp-ts/Option';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { AggregationPeriod } from '../model/aggregation.model';
import { LayerItem } from '../model/chart-layers.model';
import { ChartCoreConfigOffsets, ChartSettings, ChartType, CompareInstrument } from '../model/chart.model';
import { DrawingType } from '../model/drawing.model';
import { Instrument } from '../model/instrument.model';
import { InstrumentSymbol } from '../model/layout.model';
import { MultiChartLayoutType } from '../model/multichart.model';
import { TStudySettings } from '../model/studies.model';
import { TimestampRange, TimeUnits } from '../model/timeframe.model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { UnsubscribeCallback } from './api/chart-react-api.view-model';
import { TimeframePreset } from '../model/timeframe-presets.model';
export type ChartsInfo = NonEmptyArray<ChartInfo>;
export interface ChartInfo {
    readonly id: string;
    readonly chartType: ChartType;
    readonly instrument: Option<Instrument['symbol']>;
    readonly period: AggregationPeriod;
    readonly timeframePreset?: TimeframePreset;
    readonly extendedHours: boolean;
    readonly chartSettings: ChartSettings;
    readonly studies: TStudySettings[];
    readonly compareInstruments: CompareInstrument[];
    readonly drawings: Record<InstrumentSymbol, Drawing<DrawingType>[]>;
    readonly layers: {
        readonly layerItems: Record<InstrumentSymbol, LayerItem[]>;
        /**
         * @description
         * `LayerItemsGroup` id - needed for the DrawingGroups feature
         * @see
         * If value is not present, DrawingGroupsVM defaults it to `DEFAULT_GROUP_ID`
         * @default
         * `DEFAULT_GROUP_ID`
         */
        readonly selectedGroup?: string;
    };
    readonly panes: {
        order: string[];
        heightRatio: Record<string, number>;
    };
    readonly xScaleViewport: {
        startTimestamp: number;
        endTimestamp: number;
    };
}
export interface MultiChartViewModelState {
    readonly layout: MultiChartLayoutType;
    readonly lastChartType: ChartType;
    readonly isChartTypeSyncEnabled: boolean;
    readonly lastInstrument: Option<Instrument['symbol']>;
    readonly lastCompareInstruments: CompareInstrument[];
    readonly isInstrumentSyncEnabled: boolean;
    readonly lastTimezone: string;
    readonly isTimezoneSyncEnabled: boolean;
    readonly lastAggregationPeriodType: AggregationPeriod;
    readonly isAggregationPeriodTypeSyncEnabled: boolean;
    readonly lastGeneralSettings: ChartSettings;
    readonly isGeneralSettingsSyncEnabled: boolean;
    readonly lastStudies: TStudySettings[];
    readonly isStudiesSyncEnabled: boolean;
    readonly charts: ChartsInfo;
    readonly maximizedChartId: Option<string>;
    readonly offsets: ChartCoreConfigOffsets;
    readonly drawingMode: boolean;
    readonly magnetMode: boolean;
}
export interface MultiChartViewModel {
    readonly state: Property<MultiChartViewModelState>;
    readonly setState: (state: MultiChartViewModelState) => void;
    readonly setLayout: (layout: MultiChartLayoutType) => void;
    readonly setChartType: (type: ChartType) => void;
    readonly setChartTypeSync: (value: boolean) => void;
    readonly setInstrument: (instrument: Option<Instrument['symbol']>) => void;
    readonly setInstrumentSync: (value: boolean) => void;
    readonly setTimezone: (timezone: string) => void;
    readonly setTimezoneSync: (value: boolean) => void;
    readonly setAggregationPeriodType: (type: AggregationPeriod) => void;
    readonly setAggregationPeriodTypeSync: (value: boolean) => void;
    readonly setGeneralSettings: (settings: ChartSettings) => void;
    readonly setGeneralSettingsSync: (value: boolean) => void;
    readonly setStudies: (studies: TStudySettings[]) => void;
    readonly setStudiesSync: (value: boolean) => void;
    readonly maximizeChart: (chartId: Option<string>) => void;
    readonly getChartInfo: (chartId: string) => ChartInfo;
    readonly getAllCharts: () => ChartInfo[];
    readonly getSelectedChartInfo: () => ChartInfo;
    /**
     * Returns an array with current layout state:
     * number of rows, number of columns
     * For example: '1x3' => [1, 3]
     */
    readonly getLayout: () => [number, number];
    readonly updateLocalChartInfo: (chartId: string, update: Partial<ChartInfo>) => void;
    readonly timestampRange: Property<TimestampRange>;
    readonly timeUnits: Property<TimeUnits>;
    readonly updateTimestampRange: (timestampRange: TimestampRange) => void;
    readonly updateTimeUnits: (timeUnits: TimeUnits) => void;
    readonly selectedChartId: Property<string>;
    readonly setSelectedChartId: (id: string) => void;
    readonly onSelectedChartIdChanged: (cb: SelectedChartIdChangedCB) => UnsubscribeCallback;
    readonly setOffsets: (offsets: ChartCoreConfigOffsets) => void;
    readonly setDrawingMode: (enabled: boolean) => void;
    readonly setMagnetMode: (enabled: boolean) => void;
    readonly chartInstances: Property<ChartWithModules[]>;
    readonly setChartInstances: (chartInstances: ChartWithModules[]) => void;
    readonly chartLayersPopoverOpened: Property<boolean>;
    readonly setChartLayersPopoverOpened: (value: boolean) => void;
}
export declare const DEFAULT_TIMESTAMP_RANGE: TimestampRange;
export declare const DEFAULT_OFFSETS: {
    visible: boolean;
    top: number;
    bottom: number;
    right: number;
    left: number;
};
export type SelectedChartIdChangedCB = (chartId: string) => void;
export declare const createMultiChartViewModel: import("../../context/context2").Context<unknown, (initial: MultiChartViewModelState, initialSelectedChartId: string) => Sink<MultiChartViewModel>>;
export declare const getChartsAmount: (layout: MultiChartLayoutType) => number;
