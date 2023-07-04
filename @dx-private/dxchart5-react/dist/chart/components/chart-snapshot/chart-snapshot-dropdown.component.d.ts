/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../config/localization/localization';
export interface ChartSnapshotMenuItem {
    /**
     * unique key for dropdown item
     */
    readonly key: string;
    readonly onSelect?: () => void;
    readonly icon?: React.ReactNode;
    /**
     * label will be rendered in the menu
     */
    readonly label: string;
}
export interface ChartSnapshotProps {
    readonly localization: Localization;
    readonly items: ChartSnapshotMenuItem[];
}
export declare const ChartSnapshotDropdown: React.MemoExoticComponent<(props: ChartSnapshotProps) => JSX.Element>;
