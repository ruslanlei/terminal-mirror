/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { GradientDirections } from '../../figures/Text/Text';
import { Vector } from '../../model/Vector';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import { ChartWithDrawings } from '../../DrawingsConfig';
export interface TextBounds {
    readonly lines: string[];
    readonly xPlacement: TextXPlacement;
    readonly yPlacement: TextYPlacement;
    readonly bgBounds: number[];
    readonly vector?: Vector;
}
export interface Paddings2D {
    y: number;
    x: number;
}
export interface Properties {
    isTransparent?: boolean;
    showBorder?: boolean;
    textFill?: string;
    textBg?: string;
    text2Bg?: string;
    padding?: Paddings2D;
    textFontFamily?: string;
    textSize?: string;
    bgBorder?: string;
    borderRadius?: number;
    borderSize?: number;
    shadowBlur?: number;
    shadowColor?: string;
    textBgGradient?: {
        startColor: string;
        stopColor: string;
        direction?: GradientDirections;
    };
    textStyle?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
    };
    warningBorderColor?: string;
    warningIconFillColor?: string;
    backgroundOffsetHeight?: number;
    backgroundOffsetWidth?: number;
    additionalLabelsTextBg?: string;
    rtl?: boolean;
}
interface TextXPlacement {
    size: number;
    bgSize?: number;
    overflows: boolean;
    oppositePlacement: boolean;
    oppositeOverflows: boolean;
    bgOffset: number;
    centerPlacement: boolean;
}
interface TextYPlacement {
    lineHeight: number;
    bgSize?: number;
    size: number;
    overflows: boolean;
    oppositePlacement: boolean;
    oppositeOverflows: boolean;
    bgOffset: number;
    centerPlacement: boolean;
}
export interface PropertiesForStroke {
    lineWidth?: number;
    lineDash?: number[];
    lineColor?: string;
    lineCap?: CanvasLineCap;
}
export interface PropertiesForFill {
    opacity?: number;
    lineColor?: string;
    fillStyle?: string;
}
interface ExtendedCurveOptions {
    drawFrom: Vector;
    calculateFrom: number;
    calculateTo: number;
}
interface LabeBoxPositionProperties {
    left: string;
    top: string;
    center: string;
    middle: string;
}
export type XPlacement = 'left' | 'right' | 'center';
export type YPlacement = 'top' | 'bottom' | 'middle';
export declare class ExtendedContext {
    context: CanvasRenderingContext2D;
    chartBootstrap: ChartWithDrawings;
    constructor(context: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings);
    stroke(): void;
    fill(): void;
    fillWithoutHT(): void;
    beginPath(): void;
    closePath(): void;
    clip(): void;
    clipToBounds(bounds: Bounds): void;
    isPointInViewport(point: Vector, radius?: number): boolean;
    getViewportBox(): Vector[];
    isSegmentInViewport(s: Vector, t: Vector): boolean;
    isRectInViewport(a: Vector, b: Vector): boolean;
    isPolygonInViewport(pts: Vector[]): boolean;
    isVerticalLine(firstPoint?: Vector, secondPoint?: Vector): boolean | undefined;
    isHorizontalLine(firstPoint?: Vector, secondPoint?: Vector): boolean | undefined;
    adjustVerticalAndHorizontalLineToCrisp(a: Vector, b: Vector): void;
    /**
     * @param a {Vector}
     * @param b {Vector}
     */
    addSegmentPath(a: Vector, b: Vector): void;
    get lineWidth(): number;
    set lineWidth(value: number);
    get shadowColor(): string;
    set shadowColor(value: string);
    get shadowBlur(): number;
    set shadowBlur(value: number);
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
    set strokeStyle(value: string | CanvasGradient | CanvasPattern);
    get lineCap(): CanvasLineCap;
    set lineCap(value: CanvasLineCap);
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    set fillStyle(value: string | CanvasGradient | CanvasPattern);
    get font(): string;
    set font(value: string);
    get lineDash(): number[];
    set lineDash(segments: number[]);
    /**
     * @param a {Vector}
     * @param b {Vector}
     * @param func {function} intersection function
     * @returns {Array.<Vector>} intersections
     * @private
     */
    private rayAndLineHelper;
    /**
     * @param a {Vector}
     * @param b {Vector}
     */
    addRayPath(a: Vector, b: Vector): void;
    getRightRayPath(a: Vector): Vector[] | undefined;
    /**
     * Adds rectangle path which represents ray to the end of current viewport
     */
    addRectangleRayPath(x: number, topY: number, bottomY: number): void;
    calculateExtendedRectangle(x: number, topY: number, bottomY: number): Vector[];
    /**
     * Draws price label
     */
    drawPriceLabel(price: number, x: number, y: number, properties: Properties): number[] | undefined;
    addRectPathInBound(bound: Bounds): void;
    addRectPath(a: Vector, b: Vector): void;
    addLinePath(a: Vector, b: Vector): void;
    addPolygonPath(pts: Vector[]): void;
    addCurvePath(start: Vector, end: Vector, control: Vector): void;
    quadraticBezier(p0: number, p1: number, p2: number, t: number): number;
    extendedCurveLinesRight(start: Vector, end: Vector, control: Vector, options: ExtendedCurveOptions): void;
    extendedCurveLinesLeft(start: Vector, end: Vector, control: Vector, options: ExtendedCurveOptions): void;
    addArcPath(r: Vector, s: Vector, t: Vector, direction?: boolean): void;
    addEllipsePath(r: Vector, s: Vector, t: Vector): Vector[];
    addEllipseInRectanglePath(a: Vector, b: Vector): void;
    addArcInRectanglePath(a: Vector, b: Vector, direction?: boolean): void;
    getPointsByRectanglePath(a: Vector, b: Vector): Vector[];
    addCirclePath(point: Vector, radius: number): void;
    /**
     * Gets farthest ray intersection with current viewport box ignoring intersection with
     * left viewport box side
     */
    rayIntersection(start: Vector, end: Vector): {
        side: number;
        point: Vector;
    } | null;
    /**
     * @param a {Vector}
     * @param b {Vector}
     * @returns {Array.<Vector>}
     */
    intersectLineVertically(a: Vector, b: Vector): Vector[];
    intersectRayVertically(a: Vector, b: Vector, isRight: boolean): Vector[];
    orderByLesserX(a: Vector, b: Vector): Vector[];
    getByGreaterX(a: Vector, b: Vector): Vector;
    getByLesserX(a: Vector, b: Vector): Vector;
    drawRoundedLine(vector: Vector, lineWidth: number, lineLength: number, borderWidth: number, textBg: string, warningBorderColor?: string): void;
    drawWarningIcon(vector: Vector, radius: number, properties: Properties): void;
    drawTextInRoundedLabel(vector: Vector, text: string, properties: Properties): void;
    /**
     * @param start {Vector}
     * @param a {Vector}
     * @param b {Vector}
     */
    addFillBetweenRaysPath(start: Vector, a: Vector, b: Vector): void;
    isHitTest(): boolean;
    prepareStroke(properties: PropertiesForStroke): void;
    prepareFill(properties: PropertiesForFill): void;
    fillAndStroke(properties: PropertiesForFill & PropertiesForStroke): void;
    prepareTextBg(properties: Properties, bgBounds: number[], isTransparent: boolean): void;
    convertFontSizePxInPt(fontSize: string): number;
    drawTextLetters(vector: Vector, lines: string[], properties: Properties, lineHeight: number, x: TextXPlacement, y: TextYPlacement, synchronizeWithCss?: boolean): void;
    /**
     * Calculates text location regarding to Y-axis
     */
    calculateTextYPlacement(vector: Vector, lines: string[], placement: string, properties: Properties): TextYPlacement;
    /**
     * Calculates text location regarding X-axis
     */
    calculateTextXPlacement(vector: Vector, width: number, placement: string, properties: Properties): TextXPlacement;
    /**
     * Calculates text bounds with appropriate adjustments relating to viewport bounds trying to keep text within
     * viewport
     * @param vector
     * @param text
     * @param xPlacement
     * @param yPlacement
     * @param properties
     * @param top
     * @param left
     * @returns {{lines: Array, xPlacement: (*|{size, overflows, oppositePlacement, oppositeOverflows, bgOffset}), yPlacement: (*|{lineHeight, size, overflows, oppositePlacement, oppositeOverflows, bgOffset}), bgBounds: [null,null,null,null]}}
     */
    calculateTextBounds(vector: Vector, text: string, xPlacement: XPlacement, yPlacement: YPlacement, properties: Properties, { top, left, center, middle }: LabeBoxPositionProperties): TextBounds;
    prepareTextFill(properties: Properties): void;
    drawText(vector: Vector, text: string, xPlacement: XPlacement, yPlacement: YPlacement, properties?: Properties, textSelection?: string, positionPropeties?: LabeBoxPositionProperties, synchronizeWithCss?: boolean): number[];
    drawRoundedTextLabelInRect(text: string, additionalLabels: string[], x: number, topY: number, bottomY: number, drawWarningIcon: boolean, properties: Properties): void;
}
export declare function getProperty<T extends Record<string, any>, K extends keyof T>(properties: T, key: K, defaultValue: NonNullable<T[K]>): NonNullable<T[K]>;
export declare class ExtendedHitTestContext extends ExtendedContext {
    drawTextLetters(): void;
    lineOffset: number;
    get lineDash(): number[];
    set lineDash(value: number[]);
    get lineCap(): CanvasLineCap;
    set lineCap(value: CanvasLineCap);
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
    set strokeStyle(value: string | CanvasGradient | CanvasPattern);
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    set fillStyle(value: string | CanvasGradient | CanvasPattern);
    get lineWidth(): number;
    set lineWidth(value: number);
    get globalAlpha(): number;
    set globalAlpha(_value: number);
    constructor(context: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings);
    isHitTest(): boolean;
    setUp(color: string, lineOffset: number): void;
    fillWithoutHT(): void;
}
export declare function fillRect(ctx: CanvasRenderingContext2D, a: Vector, b: Vector): void;
export {};
