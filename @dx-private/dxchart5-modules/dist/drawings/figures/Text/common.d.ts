/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Vector } from '../../model/Vector';
import { ExtendedContext, Properties } from '../../components/extended_context/ExtendedContext';
export interface BubbleFigureProperties {
    text: {
        textFill: string;
        textBg: string;
        borderRadius?: number;
        borderSize?: number;
        bgBorder?: string;
        textFontFamily?: string;
        textSize: string;
        textStyle: {
            bold?: boolean;
            underline?: boolean;
            italic?: boolean;
        };
        backgroundOffsetWidth?: number;
        backgroundOffsetHeight?: number;
        rtl?: boolean;
        padding?: {
            x: number;
            y: number;
        };
    };
}
export type Coordinate = [number, number];
export type BubbleSectorCoordinates = [Coordinate, Coordinate, Coordinate];
export type SwooshCoordinates = [Coordinate, BubbleSectorCoordinates];
export declare const bubbleLineSectors: readonly ["left", "top", "right", "bottom"];
export declare const bubbleCornerSectors: readonly ["topLeft", "topRight", "bottomRight", "bottomLeft"];
export type BubbleLineSectors = (typeof bubbleLineSectors)[number];
export type BubbleCornerSectors = (typeof bubbleCornerSectors)[number];
export type BubbleSectors = BubbleLineSectors | BubbleCornerSectors;
export type BubblePoints = Record<BubbleSectors, BubbleSectorCoordinates>;
export type SwooshPoints = SwooshCoordinates;
export type SwooshPosition = BubbleSectors;
export declare function isBubbleLineSector(sector: BubbleSectors): sector is BubbleLineSectors;
export declare const bubblePointsToVectors: (bubblePoints: BubblePoints) => Vector[];
export declare function drawBubble(ctx: ExtendedContext, bgBounds: [number, number, number, number], bubblePoints: BubblePoints, properties: Properties, isTransparent: boolean): void;
export declare function drawSwoosh(ctx: ExtendedContext, swooshPoints: SwooshCoordinates, swooshSector: BubbleSectors, swooshWidth: number, color: string): void;
export declare function drawBubbleBorder(ctx: ExtendedContext, bubblePoints: BubblePoints, color: string, width: number): void;
export declare function drawBubbleCorner(ctx: CanvasRenderingContext2D, cornerCoords: BubbleSectorCoordinates): void;
export declare function drawBubbleLine(ctx: CanvasRenderingContext2D, start: Coordinate, end: Coordinate): void;
export declare function calcSwooshPosition(anchorPoint: Vector, rectPoint: Vector, maxDeltaX: number, maxDeltaY: number): SwooshPosition | null;
