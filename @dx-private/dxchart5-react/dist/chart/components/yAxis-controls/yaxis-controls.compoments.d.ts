/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
export declare const YAxisControls: import("../../../context/context2").Context<Record<"yAxisConfiguratorViewModel", import("../../view-models/yaxis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"chartInstance", import("../canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartDataViewModel", import("../../view-models/chart-data.view-model").ChartDataViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartSessionsViewModel", import("../../view-models/chart-sessions.view-model").ChartSessionsViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"multiChartViewModel", import("../../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"chartReactConfig", ChartReactConfig>, React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
    children?: React.ReactNode;
}>)>;
