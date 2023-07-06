/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { Localization } from '../../config/localization/localization';
import { ChartReactApiVM } from '../view-models/api/chart-react-api.view-model';
import { ChartSnapshotViewModel } from '../view-models/snapshot/chart-snapshot.view-model';
export declare const ChartSnapshotDropdownContainer: import("../../context/context2").Context<Record<"snapshotSharingVM", ChartSnapshotViewModel> & Record<"localization", Localization> & Record<"chartReactApiViewModel", ChartReactApiVM>, import("react").FC<Record<string, any>>>;
