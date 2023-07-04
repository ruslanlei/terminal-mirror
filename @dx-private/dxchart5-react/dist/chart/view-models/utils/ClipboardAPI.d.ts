/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
type ImagePng = 'image/png';
type TextPlain = 'text/plain';
export type ClipboardDataType = ImagePng | TextPlain;
/**
 * Copies data to clipboard.
 * @param data
 * @param type
 * @doc-tags snapshot
 */
export declare const writeToClipboard: (data: Promise<Blob> | Blob, type: ClipboardDataType) => Promise<void>;
export {};
