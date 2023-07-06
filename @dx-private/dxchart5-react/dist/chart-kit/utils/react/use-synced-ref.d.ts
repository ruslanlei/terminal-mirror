/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ForwardedRef, RefObject } from 'react';
/**
 * Use when you have forwardRef and you need another copy of that ref.
 * @param ref - from forwardRef
 * @doc-tags hooks
 */
export declare function useSyncedRef<T>(ref?: ForwardedRef<T>): RefObject<T>;
