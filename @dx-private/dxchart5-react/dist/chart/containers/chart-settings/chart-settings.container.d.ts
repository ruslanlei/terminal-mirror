/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartSettings } from '../../model/chart.model';
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
export declare const ChartSettingsContainer: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartInstance", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"themeSwitcherViewModel", import("../../view-models/theme-switcher.view-model").ThemeSwitcherViewModel> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"colorPalette", string[]> & Record<"initialChartTheme", string> & Record<"yAxisConfiguratorViewModel", import("../../view-models/yaxis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfig", import("../../components/canvas-chart-renderer/chart-with-modules").FullChartConfigWithModules>, React.FC<Record<string, any>>>;
export declare const getGeneralTabDefaultConfig: (defaultSettingsConfig: ChartSettings) => {
    chartCore: {
        components: {
            crossTool: {
                type: string;
                magnetTarget: import("@dx-private/dxchart5-light/dist/chart/components/cross_tool/cross-tool.component").MagnetTarget;
            };
            grid: {
                vertical: boolean;
                horizontal: boolean;
            };
            highLow: {
                visible: boolean;
            };
            chart: {
                showWicks: boolean;
                equivolume: {
                    showClosePrice: boolean;
                };
            };
            waterMark: {
                visible: boolean;
            };
        };
    };
};
