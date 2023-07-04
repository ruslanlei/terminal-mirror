/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@dx-private/dxchart5-light/dist/chart/drawers/drawing-manager';
import { HitTestCanvasModel } from '@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';
import DrawingsModel from '../model/DrawingsModel';
import Canvases from '../canvases';
export declare const extendedHTRadius = 12;
export declare class DrawingsHitTestDrawer implements Drawer {
    private drawings;
    private canvases;
    private hitTestCanvasModel;
    constructor(drawings: DrawingsModel, canvases: Canvases, hitTestCanvasModel: HitTestCanvasModel);
    draw(): void;
    getCanvasIds(): Array<string>;
}
