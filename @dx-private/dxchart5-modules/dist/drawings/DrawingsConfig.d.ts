/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CursorType, FullChartColors, FullChartConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { DateTimeFormatConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { DrawingsComponent } from './DrawingsComponent';
import { PropertiesByType } from './figures/model/PropertiesByType';
import { DrawingConfig, DrawingModel } from './model/DrawingModel';
import { DrawingType } from './model/DrawingTypes';
import drawingEvents, { EVENT_DRAWN_FIGURE_COMPLETED, EVENT_DRAW_FIGURE_DBL_CLICK, EVENT_DRAW_FIGURE_DESELECTED, EVENT_DRAW_FIGURE_SELECTED } from './model/DrawingsEvents';
import { NullableDrawingModel } from './model/DrawingsModel';
export interface DrawingKeyPointStyle {
    fillStyle?: string;
    lineColor?: string;
    lineWidth?: number;
    opacity?: number;
    radius?: number;
    shape?: string;
}
export type ExtendedKeyPointStyle = DrawingKeyPointStyle & {
    radiusExtension?: number;
};
export interface DrawingCursors {
    type: DrawingType;
    resize: CursorType;
    rotate: CursorType;
    match: CursorType;
    grab: CursorType;
    grabbing: CursorType;
    draw: CursorType;
    disallowed: CursorType;
}
export interface DrawingKeyPoint {
    timestamp: number;
    value: number;
}
export interface LineProperties {
    lineColor: string;
    lineDash: Array<number>;
    lineWidth: number;
    lineCap?: CanvasLineCap;
    lineVisibility?: boolean;
}
export interface Drawing<T extends DrawingType> {
    data?: unknown;
    id: string;
    visible: boolean;
    locked: boolean;
    keyPoints: Array<DrawingKeyPoint>;
    properties: PropertiesByType[T];
    type: T;
    _internalDrawing: DrawingModel<T>;
}
export type SnapMode = 'increments' | 'none';
export interface ChartConfigComponentsDrawings {
    visible: boolean;
    /**
     * Magnet for drawings - cursor will stick to candle OHLC when close to it.
     * Magnet strength can be any number, for example: 0 - disabled, 30 - strong magnet.
     */
    magnet: number;
    /**
     * Snap mode for drawings - minimal step for price axis to put a drawing.
     * Possible values: 'increments', 'none'.
     */
    snapping: SnapMode;
    /**
     * Format for X axis labels for drawings. Any drawing have a projection on X axis.
     */
    xAxisLabelFormat: Array<DateTimeFormatConfig>;
    /**
     * Infinite drawing - when in this mode, the same drawing will start again once finished.
     * Press Escape to cancel drawing.
     */
    drawingMode: boolean;
    cursors: DrawingCursors[];
    fontSize: number;
    fontFamily: string;
}
export interface DrawingsTheme {
    points: {
        defaultKeyPoint: DrawingKeyPointStyle;
        activeKeyPoint: DrawingKeyPointStyle;
        defaultHoverKeyPoint: DrawingKeyPointStyle;
        activeHoverKeyPoint: DrawingKeyPointStyle;
        addingKeyPoint: DrawingKeyPointStyle;
    };
    xAxis: {
        highlightColor: string;
        labelColor: string;
    };
    yAxis: {
        highlightColor: string;
        labelColor: string;
    };
    textBg: string;
    textColor: string;
}
export type ChartWithDrawings = ChartBootstrap & {
    drawingsComponent: DrawingsComponent;
    config: FullChartConfigDrawings;
};
export type FullChartConfigDrawings = {
    components: {
        drawings: ChartConfigComponentsDrawings;
    };
    colors: {
        drawingsTheme: DrawingsTheme;
    };
} & FullChartConfig;
export type FullChartColorsDrawings = {
    drawingsTheme: DrawingsTheme;
} & FullChartColors;
declare module '@dx-private/dxchart5-light/dist/chart/events/event-bus' {
    interface EventBusOn {
        (type: typeof drawingEvents.EVENT_DRAWN_FIGURE_ACTIVATE, fn: (model: NullableDrawingModel, suppressEvents?: boolean) => void): () => void;
        (type: typeof drawingEvents.EVENT_DRAWN_FIGURE_REMOVE_MODELS, fn: (models: NullableDrawingModel[]) => void): () => void;
        (type: typeof drawingEvents.EVENT_DRAWN_FIGURE_START, fn: (config: DrawingConfig<DrawingType>) => void): () => void;
        (type: typeof EVENT_DRAW_FIGURE_DBL_CLICK | typeof EVENT_DRAWN_FIGURE_COMPLETED | typeof EVENT_DRAW_FIGURE_SELECTED | typeof EVENT_DRAW_FIGURE_DESELECTED, fn: (drawing: NullableDrawingModel) => void): () => void;
    }
}
export declare function getDefaultCursorsForDrawing(type: DrawingType): DrawingCursors;
export declare const defaultDrawingColors: {
    points: {
        defaultKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        activeKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        defaultHoverKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        activeHoverKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        addingKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
    };
    xAxis: {
        highlightColor: string;
        labelColor: string;
    };
    yAxis: {
        highlightColor: string;
        labelColor: string;
    };
    textBg: string;
    textColor: string;
};
export declare const defaultDrawingsConfig: ChartConfigComponentsDrawings;
export declare const applyDrawingsConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        drawings: ChartConfigComponentsDrawings;
    };
    colors: {
        drawingsTheme: DrawingsTheme;
    };
} & FullChartConfig;
