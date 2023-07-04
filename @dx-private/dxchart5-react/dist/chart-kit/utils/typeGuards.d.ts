/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Ref, RefObject } from 'react';
/**
 * TODO describe
 * @param elem
 * @doc-tags utility
 */
export declare const isHTMLInput: (elem: Element | Text | EventTarget | null) => elem is HTMLInputElement;
/**
 * TODO describe
 * @param ref
 * @doc-tags utility
 */
export declare const isRefObject: <T extends HTMLElement>(ref: Ref<T>) => ref is RefObject<T>;
