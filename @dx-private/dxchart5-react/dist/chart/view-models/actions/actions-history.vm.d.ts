/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../../context/sink2';
import { Stack } from '../../../utils/stack';
export declare const chartActions: readonly ["aggregation_change", "instrument_change", "chart_type_change", "settings_change", "studies_change", "drawings_update", "compare_change", "y_axis_labels_change"];
export type ActionType = typeof chartActions[number];
export interface ChartAction {
    readonly type: ActionType;
    readonly undo: () => void;
    readonly redo: () => void;
}
export interface ActionsHistoryVM {
    readonly undo: () => void;
    readonly redo: () => void;
    readonly pushAction: (action: ChartAction, executeOnPush?: boolean) => void;
    readonly undoStack: Stack<ChartAction>;
    readonly redoStack: Stack<ChartAction>;
}
/**
 * @doc-tags chart-react,undo
 */
export declare const createActionsHistoryVM: () => Sink<ActionsHistoryVM>;
