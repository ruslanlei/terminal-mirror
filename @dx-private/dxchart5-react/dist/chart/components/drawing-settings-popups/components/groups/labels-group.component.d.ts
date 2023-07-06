/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ReactNode } from 'react';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
type LabelsGroupConsumers = 'line' | 'arrow' | 'extended_line' | 'info_line' | 'ray';
export interface LabelsGroupProps<T extends LabelsGroupConsumers> extends ControlProps<DrawingModel<T>> {
    readonly drawingsDict: DrawingsDictionary;
    readonly children?: ReactNode;
}
declare function LabelsGroupSettings<T extends LabelsGroupConsumers>(props: LabelsGroupProps<T>): JSX.Element;
export declare const LabelsGroup: typeof LabelsGroupSettings;
export {};
