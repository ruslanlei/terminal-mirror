/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const colorToAlpha: (color: string) => number;
export declare const splitRGBAColor: (color: string) => string[];
export declare const getNewValidRGBAColor: (color: string, opacity: number) => string;
export declare const getPureColor: (color: string) => string;
export declare const rgbaToHexColor: (rgba: string) => string;
export declare const isWhite: (rgba: string) => boolean;
