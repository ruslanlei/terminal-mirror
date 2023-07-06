/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { NotificationViewModel } from '../view-models/notification.view-model';
import { UserDataViewModel } from '../view-models/user-data.view-model';
export declare const NotificationsContainer: import("../../context/context2").Context<Record<"notificationVM", NotificationViewModel> & Record<"userDataViewModel", UserDataViewModel>, import("react").FC<Record<string, any>>>;
