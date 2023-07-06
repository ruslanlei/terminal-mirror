/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ToolbarDictionary } from '../../../config/localization/toolbar';
export interface ChartScalingToolProps {
    readonly zoomIn: () => void;
    readonly zoomOut: () => void;
    readonly isZoomBtnEnabled: boolean;
    readonly localization: ToolbarDictionary;
}
export declare const ChartScalingTool: React.MemoExoticComponent<(props: ChartScalingToolProps) => JSX.Element | null>;
