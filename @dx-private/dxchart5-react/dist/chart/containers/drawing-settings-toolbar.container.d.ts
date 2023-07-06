/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ReactNode } from 'react';
import { Localization } from '../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { ChartDataViewModel } from '../view-models/chart-data.view-model';
import { ChartDrawingViewModel } from '../view-models/drawing.view-model';
export interface DrawingSettingsToolbarContainerProps {
    readonly settingsIcon?: ReactNode;
    readonly removeIcon?: ReactNode;
}
export declare const DrawingSettingsToolbarContainer: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"colorPalette", string[]> & Record<"localization", Localization>, import("react").FC<DrawingSettingsToolbarContainerProps>>;
