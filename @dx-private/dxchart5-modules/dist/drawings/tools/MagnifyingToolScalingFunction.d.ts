/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import DrawingsModel from '../model/DrawingsModel';
import { DrawingViewModel } from '../model/DrawingViewModel';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
export declare function setMagnifiedScale(drawingViewModel: DrawingViewModel, scales: 'x' | 'xy', chartBootstrap: ChartBootstrap, drawings: DrawingsModel): void;
