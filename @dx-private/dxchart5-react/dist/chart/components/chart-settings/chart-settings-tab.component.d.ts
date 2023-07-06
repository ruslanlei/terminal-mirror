/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { PropsWithChildren } from 'react';
import { TabTypeWithIcon } from './chart-settings.model';
interface ChartSettingsTabProps {
    readonly tab: TabTypeWithIcon;
    readonly index: number;
    readonly isActive: boolean;
    readonly testId?: string;
    readonly onSelect: (index: number) => void;
}
export declare const ChartSettingsTab: React.MemoExoticComponent<(props: PropsWithChildren<ChartSettingsTabProps>) => JSX.Element>;
export {};
