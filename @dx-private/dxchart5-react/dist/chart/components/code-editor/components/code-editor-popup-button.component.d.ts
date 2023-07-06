/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC } from 'react';
import { CKButtonProps } from '../../../../chart-kit/Button/default/Button.component';
export interface CodeEditorPopupButtonProps extends CKButtonProps {
    readonly mode: 'default' | 'primary';
    readonly hasIcon?: boolean;
}
export declare const CodeEditorPopupButton: FC<CodeEditorPopupButtonProps>;
