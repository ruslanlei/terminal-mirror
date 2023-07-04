/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartConfiguratorViewModel } from '../../../view-models/chart-configurator.view-model';
import { ChartTypeViewModel } from '../../../view-models/chart-type.view-model';
import { PopoverCoordinates } from '../../../../chart-kit/Popover/Popover.model';
export interface ChartLegendMainSeriesPopoverProps {
    readonly popupPosition: PopoverCoordinates;
    readonly isOpened: boolean;
    readonly onRequestClose: () => void;
}
export declare const ChartLegendMainSeriesPopover: import("../../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel>, React.FC<ChartLegendMainSeriesPopoverProps>>;
