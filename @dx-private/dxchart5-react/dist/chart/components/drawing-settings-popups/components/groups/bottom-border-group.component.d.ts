/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type BottomBorderGroupConsumers = 'price_range';
export interface BottomBorderGroupProps<T extends BottomBorderGroupConsumers> extends ControlProps<DrawingModel<T>> {
    readonly drawingsDict: DrawingsDictionary;
    readonly palette: string[];
}
declare function BottomBorderGroupSettings<T extends BottomBorderGroupConsumers>(props: BottomBorderGroupProps<T>): JSX.Element;
export declare const BottomBorderGroup: typeof BottomBorderGroupSettings;
export {};
