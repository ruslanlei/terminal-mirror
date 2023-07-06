/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { DrawingSettingsGroupProps } from '../../../drawing-settings-section/drawing-settings-group';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type CoeffGroupConsumers = 'fibonacci_channel' | 'fibonacci_projection' | 'fibonacci_retracements' | 'fibonacci_rays' | 'fibonacci_ark' | 'fibonacci_circles' | 'fibonacci_time_zones' | 'fibonacci_time_extension' | 'fibonacci_time_ratios' | 'gann_box' | 'gann_fan';
export interface CoeffGroupProps<T extends CoeffGroupConsumers> extends ControlProps<DrawingModel<T>>, DrawingSettingsGroupProps {
    readonly className?: string;
    readonly drawingsDict: DrawingsDictionary;
}
declare function CoeffGroupSettings<T extends CoeffGroupConsumers>(props: CoeffGroupProps<T>): JSX.Element;
export declare const CoeffGroup: typeof CoeffGroupSettings;
export {};
