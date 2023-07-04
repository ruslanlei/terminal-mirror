/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { Option } from 'fp-ts/Option';
import { DrawingGroup, DrawingsConfig, DrawingType } from '../model/drawing.model';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { Property } from '../../utils/property.utils';
import { IconsPool, IconsPoolNames } from '../../config/icons-pool';
import { MultiChartViewModel } from './multi-chart.view-model';
import { InstrumentSymbol } from '../model/layout.model';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import { NotificationViewModel } from './notification.view-model';
import { Localization } from '../../config/localization/localization';
import { Position, UserDataViewModel } from './user-data.view-model';
import { Lazy } from 'fp-ts/function';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { Sink } from '../../utils/sink';
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/DrawingsConfig';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartReactConfig } from '../../config/chart-react-config';
export interface ChartDrawingViewModel {
    availableDrawings: ReadonlyArray<DrawingType>;
    drawingMode: Property<DrawingMode<DrawingType>>;
    drawings: Property<Record<string, Drawing<DrawingType>[]>>;
    setDrawings: (drawings: Record<string, Drawing<DrawingType>[]>) => void;
    startNewDrawing: (type: DrawingType) => void;
    startNewIconDrawing: (iconType: IconsPoolNames) => void;
    isVisible: Observable<boolean>;
    changeVisibility: (isShown: boolean) => void;
    clearDrawings: () => void;
    cancelDrawing: () => void;
    currentEditableDrawing: Property<Option<DrawingModel<DrawingType>>>;
    updateDrawing: (drawing: DrawingModel<DrawingType>) => void;
    removeDrawing: (drawing: DrawingModel<DrawingType>) => void;
    resetChanges: () => void;
    toggleSettingsPopup: (isSettingsPopupOpened: boolean) => void;
    doesChartHaveDrawings: Observable<boolean>;
    isSettingsPopupOpened: Observable<boolean>;
    isPopoverOpened: Observable<boolean>;
    togglePopover: (opened: boolean) => void;
    iconDrawingIcons: IconsPool;
    handleDrag: (props: ToolbarPosition) => void;
    updateToolbarWidth: (width: number) => void;
    toolbarPositionPixels: Property<ToolbarPosition>;
    chartBounds: Property<Bounds>;
    toolbarWidth: Property<number>;
    sendMagnetModeNotification: (enabled: boolean) => void;
    sendDrawingModeNotification: (enabled: boolean) => void;
    sendDeleteDrawingsNotification: Lazy<void>;
    onFavorite: (name: DrawingType) => void;
    onUnFavorite: (name: DrawingType) => void;
    favoriteDrawings: Property<Array<DrawingType>>;
    drawingGroups: Property<DrawingGroup[]>;
    changeMode: (mode: DrawingMode<DrawingType>) => void;
    toggleDrawingVisibility: (drawing: DrawingModel<DrawingType>, visible: boolean) => void;
    toggleDrawingLocked: (drawing: DrawingModel<DrawingType>, locked: boolean) => void;
    isDrawingsLimitReached: Observable<boolean>;
}
export interface CreateChartDrawingViewModel {
    (initialDrawings: Record<InstrumentSymbol, Drawing<DrawingType>[]>, availableDrawings: ReadonlyArray<DrawingType>, config: DrawingsConfig<DrawingType>, chartId: string): Sink<ChartDrawingViewModel>;
}
export interface ToolbarPosition extends Position {
}
export declare const createDrawingViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"iconsPool", Readonly<Record<string, import("../../config/icons-pool").IconDefinition>>> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"notificationVM", NotificationViewModel> & Record<"localization", Localization> & Record<"userDataViewModel", UserDataViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"initialDrawings", Record<string, Drawing<"line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[]>> & Record<"availableDrawings", readonly ("line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios")[]> & Record<"initialConfig", DrawingsConfig<"line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">> & Record<"chartId", string> & Record<"chartReactConfig", ChartReactConfig>, Sink<ChartDrawingViewModel>>;
export interface EditDrawingMode<T extends DrawingType> {
    mode: 'EditDrawing';
    drawing: DrawingModel<T>;
}
export declare const editDrawingMode: <T extends "line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">(drawing: DrawingModel<T>) => EditDrawingMode<T>;
export declare const isEditDrawingMode: <T extends "line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">(mode: DrawingMode<T>) => mode is EditDrawingMode<T>;
export interface DefaultMode {
    mode: 'Default';
}
export declare const defaultMode: DefaultMode;
export declare const isDefaultMode: <T extends "line" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "rectangle" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">(mode: DrawingMode<T>) => mode is DefaultMode;
export type DrawingMode<T extends DrawingType> = EditDrawingMode<T> | DefaultMode;
export declare function copyDrawing<T extends DrawingType>(model: DrawingModel<T>): DrawingModel<T>;
/**
 * Developers-defined groups of drawings.
 * Could be re-ordered in future maybe by host applications.
 */
export declare const DEFAULT_DRAWING_GROUPS: DrawingGroup[];
