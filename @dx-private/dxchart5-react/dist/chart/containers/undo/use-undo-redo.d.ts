/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
interface BtnsKeyCodes {
    undoKeyCode: string;
    redoKeyCode: string;
}
/**
 * Enables undo/redo VM.
 * @param btnsKeyCodes
 * @param undo
 * @param redo
 * @doc-tags undo, shortcut
 */
export declare const useUndoRedo: (btnsKeyCodes: BtnsKeyCodes, undo: Lazy<void>, redo: Lazy<void>) => void;
export {};
