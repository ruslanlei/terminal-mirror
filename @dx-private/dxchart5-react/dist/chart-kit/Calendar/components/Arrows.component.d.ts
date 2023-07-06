/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
import React from 'react';
import { DateRangeValue, RangeSide } from '../Calendar.model';
export interface ArrowsProps {
    readonly min: Date;
    readonly max: Date;
    readonly rangeSide: RangeSide;
    readonly singleMode: boolean;
    readonly currentDate: Date;
    readonly selectedDate: DateRangeValue;
    readonly onNextYearClick: Lazy<void>;
    readonly onPrevYearClick: Lazy<void>;
}
export declare const Arrows: React.NamedExoticComponent<ArrowsProps>;
