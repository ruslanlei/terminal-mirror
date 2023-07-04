/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
import React, { ReactNode } from 'react';
interface ChartSettingsPopupProps {
    readonly children: ReactNode;
    readonly onRequestClose: Lazy<void>;
    readonly isOpened: boolean;
}
export declare const ChartSettingsPopup: React.MemoExoticComponent<(props: ChartSettingsPopupProps) => JSX.Element>;
export {};
