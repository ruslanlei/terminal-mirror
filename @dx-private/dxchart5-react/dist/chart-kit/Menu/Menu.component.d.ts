/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ForwardedRef, ReactNode, ReactText } from 'react';
export interface CKMenuProps {
    readonly className?: string;
    readonly onItemSelect?: (value: ReactText) => void;
    readonly onTouchStart?: (value: ReactText) => void;
    readonly onToggle?: (value: boolean) => void;
    readonly ref?: ForwardedRef<HTMLUListElement>;
    readonly testId?: string;
    readonly ariaLabel?: string;
    readonly navigateWithArrows?: boolean;
    readonly children?: ReactNode;
}
export interface CKMenuChildProps {
    readonly onSelect?: (value: ReactText) => void;
    readonly onTouchStart?: (value: ReactText) => void;
    readonly onKeyDown?: (value: ReactText) => void;
    readonly ref?: ForwardedRef<HTMLLIElement>;
}
export declare const MENU_ID = "menu_id";
export declare const Menu: React.FC<CKMenuProps>;
