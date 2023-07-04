/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingsDictionary } from '../../../config/localization/drawings';
export interface DrawingPopupFooterProps {
    readonly requestRestoreDefaults: () => void;
    readonly onCloseRequest: () => void;
    readonly drawingsDict: DrawingsDictionary;
}
export declare const DrawingPopupFooter: (props: DrawingPopupFooterProps) => JSX.Element;
