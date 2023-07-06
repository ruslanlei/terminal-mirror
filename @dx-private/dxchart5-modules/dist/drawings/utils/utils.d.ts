/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 @param {Array} sourceArray - source array
 @param {Array} elementsToRemove - array of elements have to be removed from source array
 @param { String } byProp - property to remove elements by
 */
export declare function removeElementsByProp<A extends Partial<Record<string, unknown>>>(sourceArray: A[], elementsToRemove: A[], byProp: string): void;
export interface Clearer {
    (arr: Array<() => void>): () => void;
}
export declare const clearer: Clearer;
