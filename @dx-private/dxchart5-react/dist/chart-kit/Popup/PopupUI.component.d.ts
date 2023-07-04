/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { MouseEventHandler, ReactNode } from 'react';
import { ScrollableMode } from '../Scrollable/Scrollable';
export declare const PopupEventTargetProvider: React.Provider<HTMLDivElement | undefined>, PopupEventTargetConsumer: React.Consumer<HTMLDivElement | undefined>;
export interface CKPopupUIProps {
    readonly header: ReactNode;
    readonly footer?: ReactNode;
    readonly isModal?: boolean;
    readonly shouldCloseOnClickAway?: boolean;
    readonly onBackdropClick: MouseEventHandler<HTMLElement>;
    readonly className?: string;
    readonly children?: ReactNode;
    readonly isOpened: boolean;
    readonly resizable?: boolean;
    readonly draggable?: boolean;
    readonly minHeight?: number | string;
    readonly minWidth?: number | string;
    readonly top?: number;
    readonly left?: number;
    readonly popupOrder?: number;
    readonly testId?: string;
    readonly scrollable?: boolean;
    readonly scrollableMode?: ScrollableMode;
    readonly showDividerOnScroll?: boolean;
}
export declare const PopupUI: React.MemoExoticComponent<React.ForwardRefExoticComponent<CKPopupUIProps & React.RefAttributes<HTMLDivElement>>>;
