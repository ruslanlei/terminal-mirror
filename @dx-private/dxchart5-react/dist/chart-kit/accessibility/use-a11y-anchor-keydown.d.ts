/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { KeyCodeType } from '../Control/Control';
interface UseA11yAnchorKeyDownOptions {
    targetCheck?: EventTarget | null;
    keyCodes?: KeyCodeType[];
}
/**
 * Anchor keyDown handler for a11y.
 * @doc-tags a11y, shortcut
 */
export declare const useA11yAnchorKeyDown: (callback: (e: React.KeyboardEvent) => void, deps: any[], options?: UseA11yAnchorKeyDownOptions) => (e: React.KeyboardEvent) => void;
export {};
