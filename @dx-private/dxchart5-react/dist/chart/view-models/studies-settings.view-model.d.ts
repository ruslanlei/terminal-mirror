/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { ChartReactConfig } from '../../config/chart-react-config';
import { Localization } from '../../config/localization/localization';
import { Sink } from '../../context/sink2';
import { DxStudiesProvider } from '../../providers/studies/dx-studies-provider';
import { StudiesDataProvider } from '../../providers/studies/studies-data-provider';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { TStudySettings } from '../model/studies.model';
import { ActionsHistoryVM } from './actions/actions-history.vm';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { DxScriptEditViewModel } from './dx-script-edit.view-model';
import { MultiChartViewModel } from './multi-chart.view-model';
export interface StudiesSettingsViewModel {
    studies$: Observable<TStudySettings[]>;
    addedStudies$: Observable<TStudySettings[]>;
    isOpened$: Observable<boolean>;
    selectedStudyUUID$: Observable<string>;
    onAddedStudy: (id: string, insertIndex?: number) => void;
    onRemoveStudy: (uuid: string) => void;
    onChangeStudy: (settings: TStudySettings) => void;
    onRemoveAllStudies: () => void;
    onReorderStudies: (startIndex: number, endIndex: number) => void;
    onOpen: () => void;
    onConfigureStudy: (studyId: string) => void;
    onClose: () => void;
    onSave: () => void;
    setStudies: (studies: TStudySettings[]) => void;
    setStudiesByIds: (studyIds: string[]) => void;
}
export declare const createStudiesSettingsViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"studiesDataProvider", StudiesDataProvider> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"dxStudiesProvider", DxStudiesProvider> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"chartReactConfig", ChartReactConfig> & Record<"localization", Localization> & Record<"chartId", string>, Sink<StudiesSettingsViewModel>>;
