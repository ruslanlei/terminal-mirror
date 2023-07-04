/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type LeftBorderGroupConsumers = 'date_range';
export interface LeftBorderGroupProps<T extends LeftBorderGroupConsumers> extends ControlProps<DrawingModel<T>> {
    readonly drawingsDict: DrawingsDictionary;
    readonly palette: string[];
}
declare function LeftBorderGroupSettings<T extends LeftBorderGroupConsumers>(props: LeftBorderGroupProps<T>): JSX.Element;
export declare const LeftBorderGroup: typeof LeftBorderGroupSettings;
export {};
