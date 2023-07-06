/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC, Ref } from 'react';
import AceEditor from 'react-ace';
import { ScriptError } from '../../../../providers/dx-script-provider';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-error_marker';
export interface CodeEditorProps {
    readonly readonly?: boolean;
    readonly code: string;
    readonly onCodeChange: (code: string) => void;
    readonly ref?: Ref<AceEditor>;
    readonly onCodeRun?: () => void;
    readonly errors?: ScriptError[];
    readonly autofocus?: boolean;
}
export declare const CodeEditor: FC<CodeEditorProps>;
