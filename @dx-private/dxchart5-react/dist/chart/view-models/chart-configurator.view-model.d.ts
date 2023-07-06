/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import { PriceAxisType } from '@dx-private/dxchart5-light/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Lens } from 'monocle-ts';
import { Observable, Subject } from 'rxjs';
import { Localization } from '../../config/localization/localization';
import { Sink } from '../../context/sink2';
import { CandleAlignment, PriceType } from '../../providers/chart-data-provider';
import { Property } from '../../utils/property.utils';
import { ChartWithModules, FullChartConfigWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartReactSettings, ChartSettings } from '../model/chart.model';
import { MultiChartViewModel } from './multi-chart.view-model';
import { ChartDataViewModel } from './chart-data.view-model';
import { ThemeType } from '../model/theme.model';
import { NotificationViewModel } from './notification.view-model';
import { TimeframeChangeStrategy } from './global-effects/keep-same-timestamp-range-aggregation.effect';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
import { UnsubscribeCallback } from './api/chart-react-api.view-model';
import { ChartTypeViewModel } from './chart-type.view-model';
import { ThemeSwitcherViewModel } from './theme-switcher.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
export interface ChartConfiguratorViewModelState {
    readonly isOpened: boolean;
    readonly activeTab: number;
    readonly activatedTheme: ThemeType;
    readonly settings: ChartSettings;
}
export interface ChartConfigurationChartModel {
    readonly axisTypeSetSubject: Subject<PriceAxisType>;
}
export interface ChartConfiguratorViewModel {
    readonly defaultConfig: ChartSettings;
    readonly state: Property<ChartConfiguratorViewModelState>;
    readonly setConfig: (settings: ChartSettings, undoable?: boolean) => void;
    readonly isOpened$: Observable<boolean>;
    readonly config$: Observable<ChartSettings>;
    readonly activeTab$: Observable<number>;
    readonly onOpenPopupRequest: () => void;
    readonly onClose: () => void;
    readonly onTabActivate: (index: number) => void;
    /***
     * @deprecated chart settings are now reset separated for each tab.
     */
    readonly onRestoreDefaultConfig: () => void;
    readonly onRestoreDefaultConfigTab: (defaultTabConfig: ChartSettings) => void;
    readonly togglePaddings: (active: boolean) => void;
    readonly setMagnetMode: (active: boolean, undoable: boolean) => void;
    readonly toggleVolumesMode: (areVolumesSeparate: boolean) => void;
    readonly toggleVolumesVisible: (visible: boolean) => void;
    readonly setVolumesEnabled: (enable: boolean) => void;
    readonly toggleSessionBreaks: (active: boolean) => void;
    readonly toggleExtendedHours: (active: boolean) => void;
    readonly setRTLMode: (value: boolean) => void;
    readonly switchAxisButtonsTopMargin: Observable<number>;
    readonly sessionBreaksDisabled: Property<boolean>;
    readonly tradingAllowed: Property<boolean>;
    readonly setSettingsByPath: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly observeBounds$: Observable<Bounds>;
    readonly setPriceType: (priceType: PriceType) => void;
    readonly setCandlesAlignment: (priceType: CandleAlignment) => void;
    readonly setAggregationTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy) => void;
    readonly setInstrumentTimeframeChangeStrategy: (strategy: TimeframeChangeStrategy) => void;
    readonly setApplyPeriodUponCreation: (apply: boolean) => void;
    readonly onChartSettingsChanged: (cb: (chartId: string, settings: ChartSettings) => void) => UnsubscribeCallback;
    readonly setTradingBoundaries: (val: {
        min?: number;
        max?: number;
    }) => void;
}
export declare const chartSettingsLens: import("monocle-ts").LensFromPath<ChartSettings>;
export declare const lensLockPriceToBarRatio: Lens<ChartSettings, boolean>;
export declare const createChartConfiguratorViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chartConfig", FullChartConfigWithModules> & Record<"themeSwitcherViewModel", ThemeSwitcherViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"notificationVM", NotificationViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"initialChartReactSettings", ChartReactSettings> & Record<"initialChartSettings", ChartSettings> & Record<"chartId", string>, Sink<ChartConfiguratorViewModel>>;
