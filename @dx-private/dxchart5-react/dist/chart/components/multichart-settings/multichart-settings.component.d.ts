/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ToolbarDictionary } from '../../../config/localization/toolbar';
declare const layouts: readonly ["1x1", "2x2", "2x1", "1x2", "3x1", "1x3"];
export type Layout = typeof layouts[number];
export interface MultichartSettingsProps {
    readonly layout: Layout;
    readonly setLayout: (layout: Layout) => void;
    readonly isInstrumentSyncEnabled: boolean;
    readonly isChartTypeSyncEnabled: boolean;
    readonly isAggregationPeriodTypeSyncEnabled: boolean;
    readonly isAppearanceSyncEnabled: boolean;
    readonly isStudiesSyncEnabled: boolean;
    readonly setInstrumentSync: (value: boolean) => void;
    readonly setChartTypeSync: (value: boolean) => void;
    readonly setAggregationPeriodTypeSync: (value: boolean) => void;
    readonly setAppearanceSync: (value: boolean) => void;
    readonly setStudiesSync: (value: boolean) => void;
    readonly className?: string;
    readonly closePopover: () => void;
    readonly localization: ToolbarDictionary;
}
export declare const MultichartSettings: React.FC<MultichartSettingsProps>;
export {};
