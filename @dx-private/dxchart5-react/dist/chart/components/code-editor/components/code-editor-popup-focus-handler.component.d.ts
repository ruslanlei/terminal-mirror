/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC, Ref } from 'react';
import AceEditor from 'react-ace';
export interface CodeEditorFocusHandlerProps {
    readonly autofocus?: boolean;
    readonly editor?: Ref<AceEditor>;
    readonly children?: React.ReactNode;
}
export declare const CodeEditorFocusHandler: FC<CodeEditorFocusHandlerProps>;
