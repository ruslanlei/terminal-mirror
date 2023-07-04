/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
import { StudiesSettingsProps } from '../../studies-settings/studies-settings.component';
export interface ChartLegendSeriesStackedStudyGroupProps {
    readonly uuid: string;
    readonly title: string;
    readonly onDeleteStudySeries: (uuid: string) => void;
    readonly studiesSettingsProps: StudiesSettingsProps;
    readonly children: React.ReactNode;
}
export declare const ChartLegendSeriesStackedStudyGroup: FC<ChartLegendSeriesStackedStudyGroupProps>;
