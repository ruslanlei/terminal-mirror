/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
import { DataSeriesModel, VisualSeriesPoint } from '@dx-private/dxchart5-light/dist/chart/model/data-series.model';
import { StudyPoint } from './StudySeries';
import { DataSeriesConfig } from '@dx-private/dxchart5-light/dist/chart/model/data-series.config';
import { AtLeastOne } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
/**
 * Represents studies data series.
 * Used only for optimization at the moment
 * @doc-tags performance
 */
export declare class StudySeriesModel extends DataSeriesModel<StudyPoint, VisualSeriesPoint> {
    readonly paneComponent: PaneComponent;
    id: number;
    constructor(paneComponent: PaneComponent, id: number, _config: AtLeastOne<DataSeriesConfig>);
    /**
     * Tricky update based on assumption what series doesn't have any gaps and presented as a single array
     */
    updateDataPoint(point: StudyPoint, pointIdx: number): void;
}
