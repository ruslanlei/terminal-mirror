/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { TimeframePreset } from '../../../model/timeframe-presets.model';
export interface TimeframePresetItemProps {
    readonly children: ReactNode;
    readonly onSelect: (presetKey: TimeframePreset) => void;
    readonly preset: TimeframePreset;
    readonly isSelected: boolean;
}
export declare const TimeframePresetItem: React.NamedExoticComponent<TimeframePresetItemProps>;
