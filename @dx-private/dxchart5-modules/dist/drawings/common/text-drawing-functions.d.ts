/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const formatText: (text: string, font: string, fontSize: string) => string;
export declare const getTextWidth: (text: string, font: string) => number;
export declare const calculateHeight: (text: string, fontSize: string) => number;
export declare const calculateLineHeight: (text: string, fontSize: string) => number;
export declare const currentSymbolWidthMultiplier = 16.6667;
export declare const getTextareaWidth: (fontSize: string) => number;
