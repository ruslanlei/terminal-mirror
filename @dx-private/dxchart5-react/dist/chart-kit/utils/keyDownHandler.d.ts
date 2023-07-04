/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { KeyCodeType } from '../Control/Control';
import React from 'react';
export interface KeyCodeHandlerOptions {
    readonly ctrlKey?: boolean;
    readonly shiftKey?: boolean;
}
export type KeyCodeHandler<T> = [KeyCodeType, (e: React.KeyboardEvent<T>) => void, KeyCodeHandlerOptions?];
/**
 * TODO describe
 * @param handlers
 * @doc-tags utility,hotkeys
 */
export declare function createKeyDownHandler<T>(...handlers: KeyCodeHandler<T>[]): (e: React.KeyboardEvent<T>) => void;
