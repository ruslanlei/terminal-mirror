/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FitType } from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import React from 'react';
import { ChartSettings } from '../../model/chart.model';
import { PriceAxisType } from '@dx-private/dxchart5-light/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { LabelMode, LabelType, YAxisLabelConfig } from '../../view-models/yaxis-configurator.view-model';
import { Localization } from '../../../config/localization/localization';
import { YAxisAlign } from '@dx-private/dxchart5-light/dist/chart/chart.config';
export interface YAxisConfiguratorPopoverProps {
    readonly isOpened: boolean;
    readonly config: ChartSettings;
    readonly xPosition: number;
    readonly yPosition: number;
    readonly onClose: () => void;
    readonly setFitType: (type: FitType, active: boolean) => void;
    readonly setAutoScale: (active: boolean) => void;
    readonly setAxisType: (type: PriceAxisType) => void;
    readonly labelsConfig: YAxisLabelConfig;
    readonly setLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly selectDescription: (value: boolean) => void;
    readonly selectCountDownBarClose: (value: boolean) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly setAxisAlign: (align: YAxisAlign) => void;
    readonly togglePriceScaleInverse: () => void;
    readonly toggleLockPriceToBarRatio: () => void;
}
export declare const YAxisConfiguratorPopover: React.NamedExoticComponent<YAxisConfiguratorPopoverProps>;
