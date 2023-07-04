/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentClass, FC, ComponentType } from 'react';
import { StudiesSettingsPopupProps } from './studies-settings-popup.component';
interface ButtonType {
    onClick: () => void;
}
export interface StudiesSettingsProps extends StudiesSettingsPopupProps {
    onOpen?: () => void;
    Button?: ComponentClass<ButtonType> | FC<ButtonType>;
    CodeEditorContainer: ComponentType<Record<string, any>>;
}
export declare const StudiesSettings: React.MemoExoticComponent<(props: StudiesSettingsProps) => JSX.Element>;
export {};
