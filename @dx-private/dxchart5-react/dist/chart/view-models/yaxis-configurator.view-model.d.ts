/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { FitType } from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { Observable } from 'rxjs';
import { AllYAxisLabelType, ChartSettings } from '../model/chart.model';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { PriceAxisType } from '@dx-private/dxchart5-light/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Property } from '../../utils/property.utils';
import { MultiChartViewModel } from './multi-chart.view-model';
import { YAxisAlign, YAxisLabels } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { ChartDataViewModel } from './chart-data.view-model';
import { ChartWithModules, FullChartConfigWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { PartialExcept } from '../../utils/types';
type YAxisLabelList = PartialExcept<Record<AllYAxisLabelType, LabelMode>, 'lastPrice'>;
export interface YAxisLabelConfig {
    labels: YAxisLabelList;
    descriptions: boolean;
    countDownToBarClose: boolean;
}
export type LabelMode = 'none' | 'line' | 'label' | 'line-label';
export type LabelType = keyof YAxisLabelConfig['labels'];
interface PopupPosition {
    readonly x: number;
    readonly y: number;
}
export interface YAxisConfiguratorViewModel {
    config$: Observable<ChartSettings>;
    isOpened: Property<boolean>;
    readonly yAxisWidth: Property<number>;
    readonly chartWidth: Property<number>;
    readonly yAxisAlign: Property<YAxisAlign>;
    popupPosition: Property<PopupPosition>;
    defaultConfig: ChartSettings;
    onClose: () => void;
    onRestoreDefaultConfig: () => void;
    setAxisType: (type: PriceAxisType, undoable?: boolean) => void;
    labelsConfig: Property<YAxisLabelConfig>;
    setYAxisAlign: (align: YAxisAlign) => void;
    changeLabelMode: (type: LabelType, mode: LabelMode) => void;
    setDescription: (active: boolean) => void;
    setCountDownBarClose: (active: boolean) => void;
    togglePriceScaleInverse: () => void;
    toggleLockPriceToBarRatio: () => void;
    setLockPriceToBarRatio: (isLocked: boolean, undoable?: boolean) => void;
    setAutoScale: (active: boolean) => void;
    setPriceAxisFitType: (type: FitType, active: boolean) => void;
    togglePercentAxis: () => void;
    toggleLogAxis: () => void;
    setYAxisLabelsSettings: (oldLabelsConfig: YAxisLabelConfig, newLabelsConfig: YAxisLabelConfig) => void;
}
export declare const createYAxisConfiguratorViewModel: import("../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"chartInstance", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"rootElement", HTMLDivElement> & Record<"initialGeneralSettings", ChartSettings> & Record<"chartId", string> & Record<"chartConfig", FullChartConfigWithModules>, Sink<YAxisConfiguratorViewModel>>;
export declare function fromCoreChartSettingsToLocalLabelsConfig(chartSettings: ChartSettings, chartCoreYAxisLabelsConfig: YAxisLabels): YAxisLabelConfig;
export {};
