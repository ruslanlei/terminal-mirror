/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { PaneData } from '../../view-models/chart-pane.view-model';
import { Option } from 'fp-ts/Option';
export interface ChartMovePaneButtonsProps {
    readonly panesData: PaneData[];
    readonly hoveredPane: Option<string>;
    readonly movePaneUp: (uuid: string) => void;
    readonly movePaneDown: (uuid: string) => void;
}
export declare const ChartMovePaneButtons: React.NamedExoticComponent<ChartMovePaneButtonsProps>;
