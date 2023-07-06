/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineProperties } from '../DrawingsConfig';
import { DateValuePoint, IndexValuePoint } from './PointEvent';
import { PropertiesByType } from '../figures/model/PropertiesByType';
import { AbstractFigure } from '../figures/model/Figure';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { DrawingType } from './DrawingTypes';
export interface DrawingConfig<T extends DrawingType> {
    id: string;
    type: DrawingType;
    visible?: boolean;
    locked?: boolean;
    data?: unknown;
    figure?: AbstractFigure<unknown>;
    cachedPoints?: IndexValuePoint[];
    keyPoints?: DateValuePoint[];
    properties: PropertiesByType[T];
    active?: boolean;
}
export interface NewDrawingConfig<T extends DrawingType> {
    id?: string;
    type: DrawingType;
    data?: unknown;
    cachedPoints?: IndexValuePoint[];
    keyPoints?: DateValuePoint[];
    properties: PropertiesByType[T];
    active?: boolean;
}
export interface InitialDrawingConfig<T extends DrawingType> {
    readonly type: DrawingType;
    readonly properties: PropertiesByType[T];
}
export interface DrawingModelProperties {
    hitTestLineOffset?: number;
    line?: LineProperties;
    style?: {
        fillBackground?: boolean;
    };
    text?: {
        textFill?: string;
        textSize?: string;
    };
}
/**
 * DrawingModel holds domain drawing state
 * See {@link AbstractFigure} and {@link DrawingViewModel}
 */
export declare class DrawingModel<T extends DrawingType> {
    id: string;
    type: T;
    /**
     * real position of drawing points (timestamp, value(price))
     */
    keyPoints: DateValuePoint[];
    properties: PropertiesByType[T];
    visible: boolean;
    locked: boolean;
    /**
     * Indicates whether the drawing is selected or not
     */
    active: boolean;
    externalEditing: boolean;
    /**
     * Actual drawing object, which performs the drawing on the canvas
     */
    figure: AbstractFigure<unknown>;
    /**
     * Number of points required to finish the drawing.
     * Usually it's the number of all points - 1.
     * See {@link AbstractFigure#points}
     */
    fixedPoints: number;
    /**
     * Most of calculation in drawings.ts are made using cached points,
     * which are re-calculated based on keyPoints.
     */
    cachedPoints: IndexValuePoint[];
    hidden: {
        diameter?: number | null;
        textSelection?: string;
        height?: number | null;
    } | null;
    intId: number;
    constructor(id: string, type: T, 
    /**
     * real position of drawing points (timestamp, value(price))
     */
    keyPoints: DateValuePoint[], properties: PropertiesByType[T], visible?: boolean, locked?: boolean, formatterProvider?: () => DateTimeFormatter);
    private calculateIntId;
    static create(drawingModelDomain: DrawingConfig<any>, formatterProvider?: () => DateTimeFormatter): DrawingModel<"line" | "trend" | "rectangle" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "text" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">;
    getFigure(): AbstractFigure<unknown>;
    isAdding(): boolean;
    mergeModel(drawingModelDomain: DrawingConfig<DrawingType>): void;
}
