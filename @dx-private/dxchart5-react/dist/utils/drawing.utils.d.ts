/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineDash, LineWidth } from '../chart/model/drawing.model';
export declare function toCanvasLineDash(lineDash: LineDash): Array<number>;
export declare function fromCanvasLineDash(lineDash: Array<number>): LineDash;
export declare function toCanvasLineWidth(lineWidth: LineWidth): number;
export declare function fromCanvasLineWidth(lineWidth: number): LineWidth;
