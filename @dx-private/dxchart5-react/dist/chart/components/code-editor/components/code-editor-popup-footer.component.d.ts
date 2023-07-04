/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { Localization } from '../../../../config/localization/localization';
export interface CodeEditorPopupFooterProps {
    readonly readonly?: boolean;
    readonly addedOnChart: boolean;
    readonly onDuplicate: () => void;
    readonly onAdd: () => void;
    readonly onUpdateOnChart: () => void;
    readonly disabled?: boolean;
    readonly codeEditorDict: Localization['codeEditor'];
    readonly addButtonDisabled: boolean;
    readonly updateButtonDisabled: boolean;
    readonly isMaxStudiesReached: boolean;
}
export declare const CodeEditorPopupFooter: FC<CodeEditorPopupFooterProps>;
