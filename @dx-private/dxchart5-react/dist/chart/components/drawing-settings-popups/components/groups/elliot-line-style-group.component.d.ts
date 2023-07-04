/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineStyleGroupProps } from './line-style-group.component';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type ElliotLineStyleGroupConsumers = 'elliott_correction_wave' | 'elliott_wave';
export interface ElliotLineStyleGroupProps<T extends ElliotLineStyleGroupConsumers> extends LineStyleGroupProps<T> {
    readonly drawingsDict: DrawingsDictionary;
}
declare function ElliotLineStyleGroupSettings<T extends ElliotLineStyleGroupConsumers>(props: ElliotLineStyleGroupProps<T>): JSX.Element;
export declare const ElliotLineStyleGroup: typeof ElliotLineStyleGroupSettings;
export {};
