/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface CKPopupHeaderProps {
    readonly isClosable?: boolean;
    readonly onRequestClose: () => void;
    readonly className?: string;
    readonly closeBtnAriaLabel?: string;
    readonly children?: React.ReactNode;
}
export declare const PopupHeader: React.FC<CKPopupHeaderProps>;
