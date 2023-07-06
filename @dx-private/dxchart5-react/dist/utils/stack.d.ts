/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Stack data structure.
 * @doc-tags utility
 */
export declare class Stack<T> {
    private _stack;
    push(item: T): void;
    clear(): void;
    at(idx: number): T | undefined;
    pop(): T | undefined;
    getLast(): T | undefined;
    get length(): number;
}
