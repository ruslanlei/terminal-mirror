/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode, ReactText, MouseEventHandler, Ref } from 'react';
export interface CKSelectboxAnchorProps {
    readonly isOpened?: boolean;
    readonly caretIcon?: ReactNode;
    readonly prefixIcon?: ReactNode;
    readonly valueText?: ReactNode;
    readonly value?: ReactText | ReactText[];
    readonly onClick?: MouseEventHandler<Element>;
    readonly onKeyDown?: (e: React.KeyboardEvent) => void;
    readonly isDisabled?: boolean;
    readonly ref?: Ref<HTMLButtonElement>;
    readonly className?: string;
    readonly hasMenu?: boolean;
    readonly isCaretIconChanged?: boolean;
    readonly testId?: string;
    readonly tabIndex?: number;
    readonly ariaLabel?: string;
    readonly ariaDescription?: string;
    readonly children?: ReactNode;
}
export declare const SelectboxAnchor: React.NamedExoticComponent<CKSelectboxAnchorProps>;
