/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type BackgroundFillGroupConsumers = 'price_range' | 'date_range' | 'date_price_range' | 'rectangle' | 'ellipse' | 'curve' | 'brush' | 'arc' | 'cycle_brackets';
export interface BackgroundFillGroupProps<T extends BackgroundFillGroupConsumers> extends ControlProps<DrawingModel<T>> {
    readonly drawingsDict: DrawingsDictionary;
    readonly palette: string[];
}
declare function BackgroundFillGroupSettings<T extends BackgroundFillGroupConsumers>(props: BackgroundFillGroupProps<T>): JSX.Element;
export declare const BackgroundFillGroup: typeof BackgroundFillGroupSettings;
export {};
