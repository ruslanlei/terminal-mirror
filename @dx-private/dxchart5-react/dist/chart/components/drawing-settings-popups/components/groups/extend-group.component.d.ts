/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
type ExtendGroupConsumers = 'line' | 'arrow' | 'extended_line' | 'info_line' | 'ray' | 'trend_channel' | 'curve' | 'fibonacci_retracements' | 'fibonacci_projection' | 'fibonacci_channel';
export interface ExtendGroupProps<T extends ExtendGroupConsumers> extends ControlProps<DrawingModel<T>> {
    readonly drawingsDict: DrawingsDictionary;
}
declare function ExtendGroupSettings<T extends ExtendGroupConsumers>(props: ExtendGroupProps<T>): JSX.Element;
export declare const ExtendGroup: typeof ExtendGroupSettings;
export {};
