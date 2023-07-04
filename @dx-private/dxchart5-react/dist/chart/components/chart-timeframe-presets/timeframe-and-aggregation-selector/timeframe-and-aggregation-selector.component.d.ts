/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { AggregationPeriod } from '../../../model/aggregation.model';
import { Timeframe } from '../../../model/timeframe-presets.model';
interface TimeframeAggregationSelectorComponentProps {
    readonly periods: AggregationPeriod[];
    readonly timeframes: Timeframe[];
    readonly onPeriodChange: (period: AggregationPeriod) => void;
    readonly selectedCustomPeriod: AggregationPeriod;
    readonly onTimeframeChange: (timeframe: Timeframe) => void;
    readonly selectedCustomTimeframe: Timeframe;
    readonly saveCustomPeriodTimeframe: (aggregation: AggregationPeriod, timeframe: Timeframe) => void;
    readonly isOpened: boolean;
    readonly onOpenedChange: (isOpened: boolean) => void;
}
export declare const TimeframeAggregationSelectorComponent: React.MemoExoticComponent<(props: TimeframeAggregationSelectorComponentProps) => JSX.Element>;
export {};
