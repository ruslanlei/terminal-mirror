/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
type ElliotDegreeGroupConsumers = 'elliott_correction_wave' | 'elliott_wave';
export interface ElliotDegreeGroupProps<T extends ElliotDegreeGroupConsumers> extends ControlProps<DrawingModel<T>> {
}
declare function ElliotDegreeGroupSettings<T extends ElliotDegreeGroupConsumers>(props: ElliotDegreeGroupProps<T>): JSX.Element;
export declare const ElliotDegreeGroup: typeof ElliotDegreeGroupSettings;
export {};
