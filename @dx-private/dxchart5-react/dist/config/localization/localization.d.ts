/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CrossToolDictionary } from './cross-tool';
import { DrawingsDictionary } from './drawings';
import { LegendDictionary } from './legend';
import { TimeZoneDictionary } from './time-zone';
import { StudiesDictionary } from './studies';
import { YAxisDictionary } from './y-axis';
import { AggregationPeriodDictionary } from './aggregationPeriod';
import { EventsDictionary } from './events';
import { CodeEditorDictionary } from './codeEditor';
import { StudiesPopupDictionary } from './studiesPopup';
import { TradingDictionary } from './trading';
import { ChartSnapshotDictionary } from './chartSnapshot';
import { ChartNotificationsDictionary } from './notifications';
import { LayoutDictionary } from './layout';
import { SidebarDictionary } from './sidebar';
import { IndicatorTemplatesDictionary } from './indicator-templates';
import { ThemesDictionary } from './themes';
import { ToolbarDictionary } from './toolbar';
import { SettingsPopupDictionary } from './settingsPopup';
import { ComponentsDictionary } from './components';
import { ChartLayersDictionary } from './chartLayers';
import { DrawingGroupsDictionary } from './drawingGroups';
import { TimeframePresetsDictionary } from './timeframePresets';
export interface Localization {
    crossTool: CrossToolDictionary;
    drawings: DrawingsDictionary;
    legend: LegendDictionary;
    timeZone: TimeZoneDictionary;
    studies: StudiesDictionary;
    aggregationPeriod: AggregationPeriodDictionary;
    yAxis: YAxisDictionary;
    events: EventsDictionary;
    codeEditor: CodeEditorDictionary;
    studiesPopup: StudiesPopupDictionary;
    trading: TradingDictionary;
    chartSnapshot: ChartSnapshotDictionary;
    notifications: ChartNotificationsDictionary;
    layout: LayoutDictionary;
    sidebar: SidebarDictionary;
    indicatorTemplates: IndicatorTemplatesDictionary;
    themes: ThemesDictionary;
    toolbar: ToolbarDictionary;
    settingsPopup: SettingsPopupDictionary;
    components: ComponentsDictionary;
    chartLayers: ChartLayersDictionary;
    drawingGroups: DrawingGroupsDictionary;
    timeframePresets: TimeframePresetsDictionary;
}
/**
 * @doc-tags chart-react,default-config,l18n
 */
export declare const DEFAULT_LOCALIZATION: Localization;
