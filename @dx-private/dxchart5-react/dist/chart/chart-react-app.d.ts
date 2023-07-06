/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DeepPartial } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
import { Option } from 'fp-ts/Option';
import React from 'react';
import { PartialChartReactConfig } from '../config/chart-react-config';
import { IconsPool } from '../config/icons-pool';
import { Localization } from '../config/localization/localization';
import { ChartAppPalette } from '../config/theme/chart-palette';
import { ChartDataProvider } from '../providers/chart-data-provider';
import { ChartSharingProvider } from '../providers/chart-sharing-provider';
import { DxScriptProvider, DxScriptRunner } from '../providers/dx-script-provider';
import { EventsDataProvider } from '../providers/events-data-provider';
import { IndicatorsTemplateProvider } from '../providers/indicator-templates-provider';
import { LayoutProvider } from '../providers/layout-provider';
import { NewsDataProvider } from '../providers/news-data-provider';
import { TradingSessionsProvider } from '../providers/sessions/trading-sessions-provider';
import { DxStudiesProvider } from '../providers/studies/dx-studies-provider';
import { SymbolSuggestProvider } from '../providers/symbol-suggest-provider';
import { OrderProvider } from '../providers/trading/order.provider';
import { PositionProvider } from '../providers/trading/position.provider';
import { UserDataProvider } from '../providers/user-data-provider';
import { TimezonesConfig } from '../utils/timezones/timezone.model';
import { PartialChartConfigWithModules } from './components/canvas-chart-renderer/chart-with-modules';
import './index.css';
import { AggregationPeriod } from './model/aggregation.model';
import { DrawingType, DrawingsConfig } from './model/drawing.model';
import { Instrument } from './model/instrument.model';
import { TStudySettings } from './model/studies.model';
import { ThemeType } from './model/theme.model';
import { TimeframePresetsList } from './model/timeframe-presets.model';
import { LocalInstrumentStore } from './stores/instrument.store';
import { ChartReactAPI, ChartReactAPICreatedCB } from './view-models/api/chart-react-api.view-model';
import { InitialLoadingItem } from './view-models/loading/initial-loader.vm';
import { ChartReactSettings, ChartTypesConfig } from './model/chart.model';
import './index.css';
export interface ChartReactProps {
    readonly data?: AppProps;
    readonly dependencies?: ChartAppDependencies;
    readonly onApiCreated?: ChartReactAPICreatedCB;
    readonly className?: string;
}
export interface AppProps {
    readonly isOffline?: boolean;
    readonly className?: string;
}
export interface ChartAppInitials {
    readonly initialLoading?: InitialLoadingItem[];
    /**
     * 	Initial instrument when rendering ChartReactApp.
     *  Specify null if you want to chart be loaded without default instrument.
     *
     * 	Example: 'AAPL'
     */
    readonly initialInstrument?: Instrument['symbol'] | null;
    /**
     * 	Initial aggregation periods.
     *
     *  Example: [{ duration: 30, durationType: 'm' }, { duration: 1, durationType: 'h' }]
     */
    readonly initialAggregationPeriods?: AggregationPeriod[];
    /**
     * Initial aggregation period.
     *
     * Example: { duration: 30, durationType: 'm' }
     */
    readonly initialAggregation?: AggregationPeriod;
    /**
     * 	Initial chart-core config.
     */
    readonly initialChartConfig?: PartialChartConfigWithModules;
    /**
     * 	Array of initial studies.
     */
    readonly initialStudies?: Array<TStudySettings['id']>;
    /**
     * 	Initial theme.
     */
    readonly initialChartTheme?: ThemeType;
}
/**
 * The main configuration place for chart-react.
 */
export interface ChartReactAppConfig extends ChartAppInitials {
    /**
     * Object with all textual information in chart - override it to make chart in other language.
     */
    readonly localization?: DeepPartial<Localization>;
    /**
     * Configuration for Chart-React application.
     * chartReactConfig is now partial - default values will be merged,
     * so you could provide only those parameters, that you need.
     */
    readonly chartReactConfig?: PartialChartReactConfig;
    /**
     * Initial chart react settings values.
     */
    readonly initialChartReactSettings?: DeepPartial<ChartReactSettings>;
    /**
     * Array of colors, that will be used in color picker component.
     */
    readonly colorPalette?: string[];
    /**
     * 	Icons for drawings.
     */
    readonly iconsPool?: IconsPool;
    /**
     * Default drawings configuration.
     * Override if you need other defaults styles.
     */
    readonly drawingsConfig?: DrawingsConfig<DrawingType>;
    /**
     * Callback which returns you object with useful API that you can call on chart to modify it.
     */
    readonly onApiCreated?: (api: ChartReactAPI) => void;
    /**
     * Main object to override colors in chart.
     * You need to pass 2 objects for each theme - css string and js object which is the same as CSS.
     * We need it for chart-core canvas coloring.
     */
    readonly palette?: DeepPartial<ChartAppPalette>;
    /**
     * List of timezones and your current timezone.
     *
     * Example: ['Europe/Berlin', 'America/Argentina/Buenos_Aires']
     */
    readonly timezones?: TimezonesConfig;
    /**
     * Array of Timeframe presets.
     * By default there are few presets: day, week, month, year, and all data.
     *
     * Example: { presets: [{ timeframe: { label: '1D', value: 86400 }, aggregation: { duration: 1, durationType: 'm', }] }
     */
    readonly initialTimeframePresets?: TimeframePresetsList;
    /**
     * List of chart types and initial chart type
     *
     * Example: {	initialChartType: candle, listOfChartTypes: ['candle', 'line', 'area', 'equivolume', 'heikinAshi']}
     */
    readonly chartTypesConfig?: Partial<ChartTypesConfig>;
}
/**
 * Providers are a way to integrate data with outside world - host application.
 */
export interface ChartReactAppProviders {
    readonly chartDataProvider?: ChartDataProvider;
    readonly symbolSuggestProvider?: SymbolSuggestProvider;
    readonly eventsDataProvider?: EventsDataProvider;
    readonly dxScriptProvider?: DxScriptProvider;
    readonly dxScriptRunner?: DxScriptRunner;
    readonly chartSharingProvider?: ChartSharingProvider;
    readonly dxStudiesProvider?: DxStudiesProvider;
    readonly tradingSessionsProvider?: TradingSessionsProvider;
    readonly orderProvider?: OrderProvider;
    readonly positionProvider?: PositionProvider;
    readonly layoutProvider?: LayoutProvider;
    readonly indicatorsTemplateProvider?: IndicatorsTemplateProvider;
    readonly userDataProvider?: UserDataProvider;
    readonly localInstrumentStore?: LocalInstrumentStore;
    readonly newsDataProvider?: NewsDataProvider;
}
export type ChartAppDependencies = ChartReactAppProviders & ChartReactAppConfig;
export type FullChartAppDependencies = Required<Omit<ChartAppDependencies, 'initialInstrument'>> & {
    readonly initialInstrument: Option<Instrument['symbol']>;
    readonly initialChartReactSettings: ChartReactSettings;
    readonly palette: ChartAppPalette;
    readonly chartTypesConfig: ChartTypesConfig;
    readonly localization: Localization;
};
/**
 * Entry point for chart-react library.
 * @doc-tags chart-react
 * @doc-tags-ref ChartReactApp#l
 */
export declare const ChartReactApp: React.NamedExoticComponent<ChartReactProps>;
