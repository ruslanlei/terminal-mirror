/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { CKPopupHeaderProps } from '../../../../chart-kit/Popup/PopupHeader.component';
export interface CodeEditorPopupHeaderProps extends CKPopupHeaderProps {
    readonly readonly?: boolean;
    readonly isAutoSaving: boolean;
    readonly header: string;
    readonly updateScriptName: (value: string | undefined) => void;
    readonly codeEditorDict: Localization['codeEditor'];
}
export declare const CodeEditorPopupHeader: React.FC<CodeEditorPopupHeaderProps>;
