/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DeepRequired } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
import { PriceType } from '../providers/chart-data-provider';
import { Event } from '../providers/events-data-provider';
import { DateFormatType } from '../chart-kit/DateInput/DateInput.model';
import { AggregationPeriod } from '../chart/model/aggregation.model';
export interface DateFormattersConfig {
    /**
     * `DMY` or NA standart `MDY`
     */
    dateInput?: DateFormatType;
    /**
     * You can configure date format with a function {@link DateAggregationFormatterFunction}.
     *
     * Function should return a pattern like `HH:mm` etc (all formats you can check in `date-fns` official docs)
     *
     * @example
     * const formatFn = (aggregation: AggregationPeriod) => {
     * 	switch (aggregation.durationType) {
     * 		case 'm':
     * 			return 'dd.MM.yyyy HH:mm'
     * 		case 'y':
     * 			return 'dd MMM yy'
     * 		default:
     * 			return 'dd MMM yy'
     * 	}
     * }
     *
     * @see that means, that for year aggregation format will look like `01 Jan 07`,
     * and for all kind of minutes aggregation string will look like `12.12.2022 23:15`, and for the rest aggregations
     * format will look like `01 Jan 07`.
     */
    legend?: DateAggregationFormatterFunction;
    /**
     * You can configure date format with a function {@link DateEventFormatterFunction}.
     *
     * Function should return a pattern like `HH:mm` etc (all formats you can check in `date-fns` official docs)
     *
     * @example
     * const formatFn = (event: 'earnings' | 'dividends' | 'splits' | 'conference-calls') => {
     * 	switch (event) {
     * 		case 'earnings':
     * 			return 'dd.MM.yyyy HH:mm'
     * 		default:
     * 			return 'dd MMM yy'
     * 	}
     * }
     *
     * @see that means, that for `earnings` event format will look like `12.12.2022 23:15`,
     * and for the rest events format will look like `01 Jan 07`.
     */
    events?: DateEventFormatterFunction;
}
export interface DateAggregationFormatterFunction {
    (aggregation: AggregationPeriod): string;
}
export interface DateEventFormatterFunction {
    (event: Event['kind']): string;
}
export interface OptionalChartReactConfig {
    fixedSize?: {
        width: number;
        height: number;
    };
    dateFormatters?: DateFormattersConfig;
}
/**
 * !IMPORTANT
 * !IMPORTANT
 * !IMPORTANT
 * Partial config needs for Dedok documentation, to make tables with interfaces nesting.
 * Please, don't modify it to full required interface.
 * Full required interface will be generated with DeepRequired<T> utility.
 */
export interface PartialChartReactConfig extends OptionalChartReactConfig {
    /**
     * In multiple mode each chart will render its own toolbar.
     */
    toolbarMode?: 'single' | 'multiple';
    layout?: PartialLayoutConfig;
    studyTemplates?: {
        enabled?: boolean;
    };
    dataExport?: {
        enabled?: boolean;
    };
    multiChart?: {
        enabled?: boolean;
    };
    lazyLoading?: PartialLazyLoadingConfig;
    trading?: PartialTradingConfig;
    studies?: PartialStudiesConfig;
    drawings?: PartialDrawingsConfig;
    toolbar?: {
        enabled?: boolean;
        showButtonsTooltip?: boolean;
    };
    yAxisControls?: {
        enabled?: boolean;
    };
    instrumentSuggest?: {
        enabled?: boolean;
        visible?: boolean;
    };
    actionsHistory?: PartialActionsHistoryConfig;
    popups?: PartialPopupsConfig;
    layers?: PartialLayersConfig;
    customPeriodInput?: PartialCustomPeriodInputConfig;
    timeframePresets?: PartialTimeframePresetsConfig;
    chartDataOptionsSettings?: PartialChartDataOptionsConfig;
    /**
     * Timeout in ms during which the chart will wait for the data
     * if no data are sent, the chart will apply empty array
     */
    dataTimeout?: number;
    priceTypes?: PartialPriceTypesConfig;
    shouldInitLayoutXScale?: boolean;
    /**
     * Removes timezone select box in UI and
     * sets current timezone to specified in timezones.currentTimezone or
     * if timezones.currentTimezone is not specified to instruments exchange timezone
     */
    timezoneControls?: {
        enabled: boolean;
    };
}
export interface PartialActionsHistoryConfig {
    undoKeyCode?: string;
    redoKeyCode?: string;
}
export interface PartialDrawingsConfig {
    toolbar?: {
        enabled?: boolean;
    };
    sidebar?: {
        enabled?: boolean;
    };
    limitOfDrawings?: number;
    /**
     * Important!
     * Couldn't be used along with object tree(layers) component
     */
    drawingGroups?: {
        enabled?: boolean;
    };
}
export interface PartialLayoutConfig {
    saveDelay?: number;
    enabled?: boolean;
}
export interface PartialLazyLoadingConfig {
    enabled?: boolean;
    firstChunkSize?: number;
    nextChunkSize?: number;
    startLoadDistance?: number;
}
export interface PartialLegendConfig {
    showOHLC?: boolean;
    showInstrument?: boolean;
}
export interface PartialPopupsConfig {
    showOutside?: boolean;
}
export interface PartialStudiesConfig {
    maxSelectedStudiesCount?: number;
    dxScriptEnabled?: boolean;
    addStudyButtonEnabled?: boolean;
}
export interface PartialTradingConfig {
    /**
     * Use it, if you want to hide/show Trading tab from settings
     */
    enabled?: boolean;
    addNewOrderEnabled?: boolean;
    showPriceAsLabels?: boolean;
    rightOffset?: number;
    takeProfitStopLossEnabled?: boolean;
    defaultOrderQuantity?: number;
    limitOrderQuantity?: number;
    currency?: string;
    orderTypes?: PartialOrderTypes;
}
export interface PartialOrderTypes {
    market?: boolean;
    limit?: boolean;
    stop?: boolean;
}
export interface PartialLayersConfig {
    enabled?: boolean;
}
export interface PartialCustomPeriodInputConfig {
    enabled?: boolean;
}
export interface PartialTimeframePresetsConfig {
    mode?: PartialTimeframePresetsConfigMode;
}
export type PartialPriceTypesConfig = PriceType[];
export interface PartialChartDataOptionsConfig {
    extendedHours: {
        enabled?: boolean;
    };
    sessionBreaks: {
        enabled?: boolean;
    };
    priceType: {
        enabled?: boolean;
    };
    candlesAlignment: {
        enabled?: boolean;
    };
}
export interface PartialCustomPeriodInputConfig {
    enabled?: boolean;
}
export type PartialTimeframePresetsConfigMode = 'full' | 'default' | 'none';
export interface PartialTimeframePresetsConfig {
    mode?: PartialTimeframePresetsConfigMode;
}
/**
 * Default config for ChartReactApp. Used when the app is being initialized. This config is static and can't be changed after initialization
 * @doc-tags chart-react,default-config
 */
export declare const DEFAULT_INIT_CHART_REACT_CONFIG: ChartReactConfig;
export type ChartReactConfig = Omit<DeepRequired<PartialChartReactConfig>, 'fixedSize' | 'dateFormatters'> & OptionalChartReactConfig;
export type LazyLoadingConfig = Required<PartialLazyLoadingConfig>;
export declare function mergeChartReactConfig(config: PartialChartReactConfig, defaultConfig?: ChartReactConfig): ChartReactConfig;
