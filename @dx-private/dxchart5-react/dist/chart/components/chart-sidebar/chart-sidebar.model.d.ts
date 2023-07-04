/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface ButtonsState {
    magnetOn: boolean;
    drawingModeOn: boolean;
    drawingsVisible: boolean;
}
export declare const sidebarFooterButtonTypes: readonly ["MAGNET", "DRAWING_MODE", "HIDE_DRAWINGS", "DELETE_DRAWINGS"];
export type SidebarFooterButtonType = (typeof sidebarFooterButtonTypes)[number];
export declare const SidebarFooterButtonTypes: {
    readonly MAGNET: "MAGNET";
    readonly DRAWING_MODE: "DRAWING_MODE";
    readonly HIDE_DRAWINGS: "HIDE_DRAWINGS";
    readonly DELETE_DRAWINGS: "DELETE_DRAWINGS";
};
