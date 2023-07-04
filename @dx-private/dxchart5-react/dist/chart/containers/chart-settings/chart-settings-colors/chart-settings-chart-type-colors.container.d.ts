/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
import { ChartTypeViewModel } from '../../../view-models/chart-type.view-model';
import { ThemeSwitcherViewModel } from '../../../view-models/theme-switcher.view-model';
import { UserDataViewModel } from '../../../view-models/user-data.view-model';
export declare const ChartSettingsChartTypeColorsContainer: import("../../../../context/context2").Context<Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"localization", Localization> & Record<"themeSwitcherViewModel", ThemeSwitcherViewModel> & Record<"userDataViewModel", UserDataViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"colorPalette", string[]> & Record<"initialChartTheme", string>, React.FC<Record<string, any>>>;
