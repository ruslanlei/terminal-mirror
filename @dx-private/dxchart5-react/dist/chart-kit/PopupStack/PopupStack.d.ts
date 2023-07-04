/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { Option } from 'fp-ts/Option';
interface PopupStackContextProps {
    readonly getLastPopup: () => Option<PopupStackItem>;
    readonly popLastPopup: () => Option<PopupStackItem>;
    readonly addPopupToStack: (id: string, cb: (...args: any[]) => void) => void;
    readonly removePopupFromStack: (id: string) => void;
    readonly stack: React.MutableRefObject<PopupStackItem[]>;
}
export interface PopupStackItem {
    id: string;
    cb: (...args: any[]) => void;
}
export declare const PopupStackContext: React.Context<PopupStackContextProps>;
export declare const PopupStackProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export {};
