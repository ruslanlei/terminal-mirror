/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Ref, PropsWithChildren } from 'react';
import * as React from 'react';
import { ControlProps } from '../Control/Control';
export interface CKEditableTextProps extends ControlProps<string> {
    readonly disabled?: boolean;
    readonly ref?: Ref<HTMLDivElement>;
    readonly className?: string;
    readonly fontParams?: string;
    readonly maxWidth?: number;
}
export declare const EditableText: React.NamedExoticComponent<PropsWithChildren<CKEditableTextProps>>;
