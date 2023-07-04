/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { StudyLineRefHolder } from '../../../dom-mutation-models/chart-legend.dom-mutation-model';
import { StudiesSettingsProps } from '../../studies-settings/studies-settings.component';
export interface ChartLegendSeriesSingleStudyGroupProps {
    readonly uuid: string;
    readonly line: StudyLineRefHolder;
    readonly onDeleteStudySeries: (uuid: string) => void;
    readonly studiesSettingsProps: StudiesSettingsProps;
}
export declare const ChartLegendSeriesSingleStudyGroup: FC<ChartLegendSeriesSingleStudyGroupProps>;
