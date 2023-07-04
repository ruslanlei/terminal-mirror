/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
export interface ChartLegendSeriesGroupProps {
    readonly title: string;
    readonly children: React.ReactNode;
}
export declare const ChartLegendSeriesGroup: FC<ChartLegendSeriesGroupProps>;
