/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { CKPopupHeaderProps } from './PopupHeader.component';
import { CKPopupUIProps } from './PopupUI.component';
export interface CKPopupProps extends Partial<CKPopupUIProps>, Partial<CKPopupHeaderProps> {
    readonly onRequestClose: () => void;
    readonly PopupUI?: ComponentType<CKPopupUIProps>;
    readonly container?: HTMLElement;
    readonly isOpened: boolean;
    readonly isClosableWithKeyboard?: boolean;
    readonly popupOrder?: number;
    readonly testId?: string;
    readonly anchorRef?: React.MutableRefObject<HTMLElement | null>;
    readonly keyboardMode?: boolean;
    readonly headerWrapped?: boolean;
}
export declare const Popup: React.NamedExoticComponent<CKPopupProps>;
