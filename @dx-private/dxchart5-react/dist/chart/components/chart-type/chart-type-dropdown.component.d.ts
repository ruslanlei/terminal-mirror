/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { ChartType } from '../../model/chart.model';
export interface ToolbarChartTypeProps {
    readonly chartTypes: ChartType[];
    readonly selectedType: ChartType;
    readonly onTypeSelect: (type: ChartType) => void;
    readonly className?: string;
}
export declare const ChartTypeDropdown: FC<ToolbarChartTypeProps>;
