/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lens } from 'monocle-ts';
import React from 'react';
import { ChartSettings } from '../../model/chart.model';
import { TabDefaultConfig, TabTypeWithIcon } from './chart-settings.model';
export interface ChartSettingsContentProps {
    readonly tabs: TabTypeWithIcon[];
    readonly tabsDefaultConfig: TabDefaultConfig[];
    readonly value: ChartSettings;
    readonly onValueChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly activeTab: number;
    readonly changeActiveTab: (tab: number) => void;
    readonly popoverRef: React.RefCallback<HTMLDivElement>;
    readonly leftSectionRef: React.RefCallback<HTMLDivElement>;
    readonly rightSectionRef: React.RefCallback<HTMLDivElement>;
}
export interface a11yTabProps {
    role: string;
    id: string;
    ariaLabelledBy: string;
}
export declare const ChartSettingsContent: React.MemoExoticComponent<(props: ChartSettingsContentProps) => JSX.Element>;
