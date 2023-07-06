/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface ChartLegendItemProps {
    readonly name: string;
    readonly value?: string;
    readonly valueColor?: string;
    readonly ChartLegendItemRef: React.RefObject<HTMLDivElement>;
}
export declare const ChartLegendItem: React.FC<ChartLegendItemProps>;
