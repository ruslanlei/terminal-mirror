/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { PropsWithChildren } from 'react';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingModel';
import { DrawingType } from '@dx-private/dxchart5-modules/dist/drawings/model/DrawingTypes';
import { ControlProps } from '../../../chart-kit/Control/Control';
import { DrawingsDictionary } from '../../../config/localization/drawings';
import { Instrument } from '../../model/instrument.model';
export interface DrawingFormType<T extends DrawingType> extends ControlProps<DrawingModel<T>> {
    readonly palette: string[];
    readonly drawingsDict: DrawingsDictionary;
    readonly instrument?: Instrument;
}
export interface DrawingPopupProps {
    readonly title: string;
    readonly isOpened: boolean;
    readonly requestClose: () => void;
    readonly requestRestoreDefaults: () => void;
    readonly isModal: boolean;
    readonly className?: string;
}
export declare const DrawingPopup: (props: PropsWithChildren<DrawingPopupProps>) => JSX.Element;
