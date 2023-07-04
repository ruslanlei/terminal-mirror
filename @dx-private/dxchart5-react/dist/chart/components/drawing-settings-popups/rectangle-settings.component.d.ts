/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { DrawingFormType } from '../drawing-popup/drawing-popup.component';
interface RectangleSettingsProperties extends DrawingFormType<'rectangle'> {
}
export declare const RectangleSettings: React.MemoExoticComponent<(props: RectangleSettingsProperties) => JSX.Element>;
export {};
