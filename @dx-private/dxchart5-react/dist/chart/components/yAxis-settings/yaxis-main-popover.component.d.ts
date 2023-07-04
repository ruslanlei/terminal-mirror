/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { Ref } from 'react';
import { ChartSettings } from '../../model/chart.model';
import { FitType } from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { PriceAxisType } from '@dx-private/dxchart5-light/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Localization } from '../../../config/localization/localization';
import { YAxisAlign } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { PopoverPosition } from '../../../chart-kit/Popover/Popover.model';
export type YAxisAlignReversed = Record<YAxisAlign, YAxisAlign>;
export interface YAxisMainPopoverProps {
    readonly isOpened: boolean;
    readonly config: ChartSettings;
    readonly xPosition: number;
    readonly yPosition: number;
    readonly onClose: () => void;
    readonly changeFitType: (type: FitType, active: boolean) => void;
    readonly toggleAutoScale: (active: boolean) => void;
    readonly toggleAxisType: (type: PriceAxisType) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly labelPopoverOpen: boolean;
    readonly toggleLabelsPopup: (opened: boolean) => void;
    readonly togglePriceScaleInverse: () => void;
    readonly setAxisAlign: (align: YAxisAlign) => void;
    readonly labelsAndLinesRef?: Ref<HTMLDivElement>;
    readonly position: PopoverPosition;
    readonly toggleLockPriceToBarRatio: () => void;
}
export declare const YAxisMainPopover: React.NamedExoticComponent<YAxisMainPopoverProps>;
