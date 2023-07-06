/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
import { Lens } from 'monocle-ts';
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartReactSettings, ChartSettings } from '../../../model/chart.model';
import { a11yTabProps } from '../chart-settings-content.component';
export interface ChartSettingsTradingProps {
    readonly localization: Localization;
    readonly settings: ChartReactSettings['trading'];
    readonly onValueChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly a11yTabProps: a11yTabProps;
    readonly onRestoreDefaultRequest: Lazy<void>;
    readonly showRestoreToDefault: boolean;
    readonly tradingAllowed: boolean;
}
export declare const ChartSettingsTabTradingContent: React.MemoExoticComponent<(props: ChartSettingsTradingProps) => JSX.Element>;
