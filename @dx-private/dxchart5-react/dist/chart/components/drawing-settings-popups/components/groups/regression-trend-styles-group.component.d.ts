/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ControlProps } from '../../../../../chart-kit/Control/Control';
import { RegressionTrendSectionSettings } from '@dx-private/dxchart5-modules/dist/drawings/figures/RegressionTrend';
import { DrawingsDictionary } from '../../../../../config/localization/drawings';
export interface RegressionTrendStylesGroupsProps extends ControlProps<RegressionTrendSectionSettings[]> {
    palette: string[];
    dictionary: DrawingsDictionary;
}
export declare const RegressionTrendStylesGroup: React.NamedExoticComponent<RegressionTrendStylesGroupsProps>;
