/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
import { DrawingSettingsGroupProps } from '../../drawing-settings-section/drawing-settings-group';
import { LineProperties } from '@dx-private/dxchart5-modules/dist/drawings/DrawingsConfig';
import { ControlProps } from '../../../../chart-kit/Control/Control';
export interface LineStyleControlProps extends ControlProps<LineProperties>, DrawingSettingsGroupProps {
    readonly palette: string[];
    readonly leadingLabel?: string;
    readonly className?: string;
    readonly children?: ReactNode;
    readonly parentEventTarget?: HTMLElement;
}
export declare const LineStyleControl: React.NamedExoticComponent<LineStyleControlProps>;
