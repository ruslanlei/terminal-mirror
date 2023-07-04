/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
import { Lens } from 'monocle-ts';
import React from 'react';
import { ChartReactConfig } from '../../../../config/chart-react-config';
import { Localization } from '../../../../config/localization/localization';
import { ChartSettings } from '../../../model/chart.model';
import { a11yTabProps } from '../chart-settings-content.component';
interface ChartSettingsTabMarketContentProps {
    readonly a11yTabProps: a11yTabProps;
    readonly chartReactConfig: ChartReactConfig;
    readonly localization: Localization;
    readonly value: ChartSettings;
    readonly onValueChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly onRestoreDefaultRequest: Lazy<void>;
    readonly sessionBreaksDisabled: boolean;
    readonly volumesDisabled: boolean;
    readonly showRestoreToDefault: boolean;
}
export declare const ChartSettingsTabMarketContent: React.NamedExoticComponent<ChartSettingsTabMarketContentProps>;
export {};
