/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../utils/property.utils';
import { Localization } from '../../config/localization/localization';
import { Option } from 'fp-ts/Option';
import { Sink } from '../../utils/sink';
export interface ChartNotification {
    readonly message: string;
    readonly displayTime: number;
}
export interface ChartNotificationOptions {
    readonly displayTime?: number;
}
export interface NotificationViewModel {
    readonly sendNotification: (msg: string, options?: ChartNotificationOptions) => void;
    readonly hideNotification: () => void;
    readonly notification: Property<Option<ChartNotification>>;
}
export declare const createNotificationViewModel: import("../../context/context2").Context<Record<"localization", Localization>, Sink<NotificationViewModel>>;
