/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { HoverStudyLine } from '../../model/StudiesHover';
import { StudiesModel } from '../../model/StudiesModel';
import StudySeries, { StudyLine } from '../../model/StudySeries';
export declare class GTrapHover {
    private chartModel;
    private studiesModel;
    constructor(chartModel: ChartModel, studiesModel: StudiesModel);
    getLines(studyModel: StudySeries, idx: number, studyLines: StudyLine[]): HoverStudyLine[];
}
