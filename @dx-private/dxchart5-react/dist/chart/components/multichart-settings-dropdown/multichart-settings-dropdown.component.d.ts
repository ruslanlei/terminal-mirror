/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { MultiChartViewModel } from '../../view-models/multi-chart.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Localization } from '../../../config/localization/localization';
export interface MultichartSettingsDropdownProps {
    readonly popoverContainer?: HTMLDivElement;
}
export declare const MultiChartSettingsButton: import("../../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", import("../../view-models/chart-data.view-model").ChartDataViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
    children?: React.ReactNode;
}>)>;
