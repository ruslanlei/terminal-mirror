/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YAxisAlign } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { AtLeastOne } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/DrawingsConfig';
import { CandleAlignment, PriceType } from '../../../providers/chart-data-provider';
import { ChartLayoutWithId, LayoutProvider } from '../../../providers/layout-provider';
import { Property } from '../../../utils/property.utils';
import { Sink } from '../../../utils/sink';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { CombinedViewModels } from '../../components/multi-chart/multi-chart.component';
import { AggregationPeriod } from '../../model/aggregation.model';
import { LayerItem } from '../../model/chart-layers.model';
import { ChartSettings, ChartType, CompareInstrument } from '../../model/chart.model';
import { DrawingType } from '../../model/drawing.model';
import { Instrument } from '../../model/instrument.model';
import { InstrumentSymbol } from '../../model/layout.model';
import { VisualOrder } from '../../model/order.model';
import { TStudySettings } from '../../model/studies.model';
import { ThemeType } from '../../model/theme.model';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { TimeframeChangeStrategy } from '../global-effects/keep-same-timestamp-range-aggregation.effect';
import { LayoutViewModel } from '../layout.view-model';
import { InitialLoaderVM } from '../loading/initial-loader.vm';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { ChartNotificationOptions, NotificationViewModel } from '../notification.view-model';
import { ChartSnapshotViewModel } from '../snapshot/chart-snapshot.view-model';
import { ThemeSwitcherViewModel } from '../theme-switcher.view-model';
export type ChartReactAPICreatedCB = (api: ChartReactAPI) => void;
export interface ChartInfoSupported {
    readonly id: string;
    readonly chartType: ChartType;
    readonly instrument?: Instrument['symbol'];
    readonly period: AggregationPeriod;
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
    /**
     * Chart instance might not be available if init is not complete
     */
    readonly chartInstance?: ChartWithModules;
}
interface ChartReactSupportedState {
    /**
     * Holds selected chart id.
     */
    readonly getSelectedChartId: () => string;
    readonly getChartInfo: (chartId: string) => ChartInfoSupported;
    readonly getSelectedChartInfo: () => ChartInfoSupported;
}
export type UnsubscribeCallback = () => void;
interface ChartReactSupportedCallbacks {
    /**
     * Registers callback for ChartInstance creation
     * The callback will be called after the chartInstance creation
     * @param callback
     */
    readonly onChartInstanceCreated: (callback: (chartId: string, chartInstance: ChartWithModules) => void) => void;
    /**
     * Registers callback for theme change
     * The callback will be called whenever the theme was changed
     * @param callback
     */
    readonly onThemeChanged: (callback: (theme: ThemeType) => void) => UnsubscribeCallback;
    /**
     * Registers callback for chart select
     * The callback will be called whenever the selected chart was changed
     */
    readonly onChartSelected: (callback: (chartId: string) => void) => UnsubscribeCallback;
    /**
     * Registers callbacks for order labels click/doubleclick
     * The callbacks will be called whenever the user clicked on order labels
     */
    readonly onOrderClick: (callback: (chartId: string, order: VisualOrder) => void) => UnsubscribeCallback;
    readonly onOrderDblClick: (callback: (chartId: string, order: VisualOrder) => void) => UnsubscribeCallback;
    /**
     * Registers callback for aggregation period changed
     * The callback will be called whenever the period was changed
     */
    readonly onPeriodChanged: (callback: (chartId: string, period: AggregationPeriod) => void, chartId?: string) => UnsubscribeCallback;
    readonly onChartSettingsChanged: (callback: (chartId: string, settings: ChartSettings) => void, chartId?: string) => UnsubscribeCallback;
    readonly onLayerItemsChanged: (callback: (chartId: string, layerItems: Record<InstrumentSymbol, LayerItem[]>) => void, chartId?: string) => UnsubscribeCallback;
}
interface ChartReactSettingsSupported {
    /**
     * An ability to disable volumes. If volumes are disabled - user can't enabled volume's visibility
     * @param enable
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setVolumesEnabled: (enable: boolean, chartId?: string) => void;
    /**
     * Sets volumes display mode, can be overlay (on the main chart) or separate (sub-graph)
     * @param mode - 'separate' or 'overlay'
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setVolumesMode: (mode: 'separate' | 'overlay', chartId?: string) => void;
    /**
     * Sets volumes visibility
     * @param visible
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setVolumesVisible: (visible: boolean, chartId?: string) => void;
    /**
     * Sets price type for chart data
     * @param priceType
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setPriceType: (priceType: PriceType, chartId?: string) => void;
    /**
     * Sets candle alignment chart data
     * @param alignment
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setCandlesAlignment: (alignment: CandleAlignment, chartId?: string) => void;
    /**
     * Sets chart's aggregation period change strategy
     * @param strategy
     * smart - preserve existing timeframe (same timeframe displayed, number of displayed candles changes).
     * basic - amount of candles resets to default, timeframe changes to basic.
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setAggregationTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy, chartId?: string) => void;
    /**
     * Sets chart's timeframe change strategy on instrument change
     * @param strategy
     * smart - preserve existing timeframe (same timeframe displayed, number of candles stays same).
     * basic - amount of candles resets to default, timeframe changes to basic.
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setInstrumentTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy, chartId?: string) => void;
    /**
     * Sets whether period should apply upon creation or not
     * @param apply
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setApplyPeriodUponCreation: (apply: boolean, chartId?: string) => void;
    readonly setAggregationRestrictionRule: (rule: (aggregation: AggregationPeriod) => boolean) => void;
    readonly setChartSettings: (settings: ChartSettings, chartId?: string) => void;
    readonly setLayerItems: (layerItems: Record<InstrumentSymbol, LayerItem[]>, chartId?: string) => void;
    readonly setCurrentTimezone: (timezone: string) => void;
    readonly addCompareInstrument: (symbol: string, chartId?: string) => void;
    readonly removeCompareInstrument: (symbol: string, chartId?: string) => void;
    readonly setCompareInstruments: (symbols: string[], chartId?: string) => void;
    /**
     * Sets trading boundaries
     * @param value - object with min and max fields, any can be omitted
     * @param value.min - lower boundary
     * @param value.max - upper boundary
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    readonly setTradingBoundaries: (value: {
        min?: number;
        max?: number;
    }, chartId?: string) => void;
}
/**
 * Supported API for chart-react library.
 * @doc-tags chart-react,api
 * @doc-tags-ref ChartReactSupportedAPI#m
 */
export interface ChartReactSupportedAPI extends ChartReactSupportedCallbacks, ChartReactSupportedState, ChartReactSettingsSupported {
    /**
     * Changes the instrument.
     * @param instrument - new instrument to set, if null, then no instrument on chart will be present
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    changeInstrument: (instrument: Instrument['symbol'], chartId?: string) => void;
    /**
     * Changes the aggregation period.
     * @param period - new period to set
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    changePeriod: (period: AggregationPeriod, chartId?: string) => void;
    /**
     * Changes color theme.
     * @param theme - light or dark
     */
    changeTheme: (theme: ThemeType) => void;
    /**
     * Sets the studies with parameters.
     * @param studies - studies or dxScript studies objects with parameters; id is important
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    setStudies: (studies: TStudySettings[], chartId?: string) => void;
    /**
     * Sets studies only by ID's, parameters and colors will be set to default.
     * @param studyIds - ID's of studies or dxScripts
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    setStudiesByIds: (studyIds: string[], chartId?: string) => void;
    /**
     * undo the last action on the chart if there is something to undo
     */
    undo: () => void;
    /**
     * redo the last action on chart if there is something to redo
     */
    redo: () => void;
    /**
     * Sets Y Axis align to left or to right
     * @param align - 'left' or 'right'
     * @param chartId - 0, 1, 2 or 3. provide no argument to set for all charts
     */
    setYAxisAlign: (align: YAxisAlign, chartId?: string) => void;
    /**
     * Allows to synchronize parts of layout to target chart.
     * @param layout - layout generated from other chart for example
     * @param options - (optional) parts synchronization options
     * @param chartId - (optional) ID of chart to synchronize to
     */
    syncLayoutParts: (layout: ChartLayoutWithId, options: AtLeastOne<SyncLayoutPartsOptions>) => void;
    /**
     * Displays notifications at the top of the chart
     * @param msg - a message to display
     * @param options - (optional) options of notifications
     * 	@prop displayTime - a time before notification disappear, default 4s
     */
    sendNotification: (msg: string, options?: ChartNotificationOptions) => void;
    /**
     * Adds time to the next candle data timestamp, changes countdown label time
     * @param timeInMs - amount of time in milliseconds
     */
    setNextCandleTimeOffset: (timeInMs: number) => void;
    /**
     * Exports chart data
     * @param chartId - 0, 1, 2 or 3.
     */
    exportChartData: (chartId: string) => void;
}
interface SyncLayoutPartsOptions {
    /**
     * Sync multiChart sync options or not. Kinda meta.
     */
    readonly multiChartSync?: boolean;
    /**
     * Sync the layout like 1x1, 2x2.
     */
    readonly multiChartLayout?: boolean;
    /**
     * Sync instrument or not.
     */
    readonly instrument?: boolean;
    /**
     * Sync chart type or not.
     */
    readonly chartType?: boolean;
    /**
     * Sync aggregation period or not.
     */
    readonly aggregation?: boolean;
    /**
     * Sync appearance or not.
     */
    readonly appearance?: boolean;
    /**
     * Sync studies or not.
     */
    readonly studies?: boolean;
    /**
     * Sync drawings or not.
     */
    readonly drawings?: boolean;
    /**
     * Sync selectedDrawingGgroup or not.
     */
    readonly selectedDrawingGroup?: boolean;
}
interface ChartReactDebug {
    /**
     * Prints current layout state to the console
     */
    readonly exportLayout: () => void;
    /**
     * Applies specified migration script to the chart and reloads the page
     */
    readonly applyMigrationScript: (scriptId: string) => void;
}
interface ReactAppState {
    readonly multiChartViewModel: MultiChartViewModel;
    readonly chartVMs: Record<string, CombinedViewModels>;
    readonly snapshotSharingVM: ChartSnapshotViewModel;
}
export interface ChartReactInternalAPI extends ReactAppState, ChartReactDebug {
    destroy: () => void;
    /**
     * Gets default localization dictionary in JSON string format
     */
    getLocalizationJSON: () => any;
}
export interface ChartReactAPI extends ChartReactSupportedAPI {
    readonly internal: ChartReactInternalAPI;
    /**
     * @deprecated
     */
    readonly supported: unknown;
}
export interface ChartReactApiVM {
    readonly api: Property<ChartReactAPI>;
    readonly addChartVMsAndInstance: (chartId: string, vms: CombinedViewModels, chartInstance: ChartWithModules) => void;
}
/**
 * This VM contains all external API.
 * Use this VM to bind API with our internal VM's structure.
 */
export declare const createChartReactApiVM: import("../../../context/context2").Context<Record<"initialLoaderVM", InitialLoaderVM> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"themeSwitcherViewModel", ThemeSwitcherViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"onApiCreated", ChartReactAPICreatedCB> & Record<"notificationVM", NotificationViewModel> & Record<"snapshotSharingVM", ChartSnapshotViewModel> & Record<"layoutViewModel", LayoutViewModel> & Record<"layoutProvider", LayoutProvider> & Record<"dxStudiesProvider", import("../../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"chartReactConfig", import("../../../config/chart-react-config").ChartReactConfig> & Record<"timezones", import("../../../utils/timezones/timezone.model").TimezonesConfig>, Sink<ChartReactApiVM>>;
export {};
