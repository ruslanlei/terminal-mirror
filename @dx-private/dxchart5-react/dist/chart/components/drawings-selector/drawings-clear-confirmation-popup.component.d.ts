/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingsDictionary } from '../../../config/localization/drawings';
export interface DrawingsClearConfirmationPopupProps {
    readonly isOpened: boolean;
    readonly onCancel: () => void;
    readonly onClear: () => void;
    readonly drawingsDict: DrawingsDictionary;
}
export declare const DrawingsClearConfirmationPopup: React.MemoExoticComponent<(props: DrawingsClearConfirmationPopupProps) => JSX.Element>;
