/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { NotificationViewModel } from '../notification.view-model';
import { ChartDrawingViewModel } from '../drawing.view-model';
import { MultiChartViewModel } from '../multi-chart.view-model';
export declare const notifyDrawingsLimitIsReachedEffect: import("../../../context/context2").Context<Record<"notificationVM", NotificationViewModel> & Record<"drawingViewModel", ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel>, import("rxjs").Observable<boolean>>;
