/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
declare const popoverPositions: readonly ["top", "right", "bottom", "left"];
export type PopoverPosition = (typeof popoverPositions)[number];
declare const popoverAlignments: readonly ["start", "center", "end"];
export type PopoverAlign = (typeof popoverAlignments)[number];
export interface Bounds {
    top: number;
    left: number;
    width: number;
    height: number;
}
export interface PopoverSize {
    width: number;
    height: number;
}
export interface PopoverCoordinates {
    x: number;
    y: number;
}
export interface PopoverPlacementArgs {
    position: PopoverPosition;
    align: PopoverAlign;
    anchorPosition: Bounds;
    popoverSize: PopoverSize;
    parentContainer: Bounds;
}
export declare function calculatePopoverPlacement({ position, align, anchorPosition, popoverSize, parentContainer, }: PopoverPlacementArgs): PopoverCoordinates;
export declare function compareCoordinates(cs1: PopoverCoordinates, cs2: PopoverCoordinates): boolean;
export {};
