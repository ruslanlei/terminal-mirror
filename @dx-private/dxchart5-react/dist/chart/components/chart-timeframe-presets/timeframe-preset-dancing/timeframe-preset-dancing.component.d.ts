/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TimeframePreset } from '../../../model/timeframe-presets.model';
export interface TimeframePresetItemDancingProps {
    readonly onDeletePreset: (presetKey: TimeframePreset) => void;
    readonly preset: TimeframePreset;
}
export declare const TimeframePresetItemDancing: React.NamedExoticComponent<TimeframePresetItemDancingProps>;
