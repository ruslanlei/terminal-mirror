/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/// <reference types="node" />
import EventBus from './event-bus';
export declare function isFunction2(functionToCheck: unknown): unknown;
export interface Clearer {
    (arr: Array<() => void>): () => void;
}
export declare const clearer: Clearer;
export declare function clearerSafe(arr: Array<() => void>): () => void;
export declare const floor: (value: number) => number;
export declare const ceil: (value: number) => number;
export declare const round: (value: number) => number;
export declare const shiftRight: (value: number, shift: number) => number;
/**
 * Finds and returns elements from the array in the given range
 * Uses modified version of binary search under the hood, so the complexity is log(N)
 *
 * @param {Item[]} array of the elements in a ASC ORDER
 * @param {number} leftBound left bound of the range
 * @param {number} rightBound right bounds of the range
 * @param {function(Item):number} transform function to transform the elements of the array if the array is not of a number type
 *
 * @returns {Item[]} array of items which fall within the range
 */
export declare function getElementsInRange(array: number[], leftBound: number, rightBound: number): number[];
export declare function getElementsInRange<Item>(array: Item[], leftBound: number, rightBound: number, transform: (item: Item) => number): Item[];
/**
 @param shouldPreventDefault
 @param {Function} listener
 wraps the listener, that it would be fired not as frequent as event itself, but not more than every 30 ms
 @param {Function} [isSuppressed] optional callback to check if the event is suppressed for some reason before adding
 the handler in requestAnimationFrame, which would execute it asynchronously
 @returns {Function}
 */
export declare function throttle<L extends EventListener>(shouldPreventDefault: boolean, listener: L, isSuppressed?: () => boolean): L;
export declare function throttle(shouldPreventDefault: boolean, listener: EventListener, isSuppressed?: () => boolean): () => void;
/**
 *
 * @param {Element} element
 * @param {function} listener
 * @param {string} eventType
 * @param {boolean?} useCapture
 * @return {Function}
 */
export declare function subscribeListener<K extends keyof GlobalEventHandlersEventMap>(element: EventTarget, listener: (e: GlobalEventHandlersEventMap[K]) => void, eventType: K, useCapture?: boolean): () => void;
/**
 * @param {Element} element
 */
export declare function removeElement(element: Element): Element | undefined;
/**
 @param {Function} gather - get the comparing value from the array
 */
export declare function maxMin<B>(gather: (b: B) => number | null | undefined): (arr: B[]) => [number, number];
/**
 *
 * @param {Array.<Number>} a
 * @param {Array.<Number>} b
 * @returns {Array.<Number>}
 */
export declare function hiLoReduce(a: [number, number], b: [number, number]): [number, number];
/**
 @param {Array} a
 @param {Array} b
 function passed to reduce to make flatten
 */
export declare function flattenFn<A>(a: A[], b: A[]): A[];
/**
 *
 * @param host
 * @param extra
 * @returns {*}
 */
export declare function extend(host: tobject, extra: tobject): tobject;
export interface XY {
    readonly pageX: number;
    readonly pageY: number;
}
export interface PageXYEvent extends XY, Event {
    readonly touches?: Touch[];
    readonly changedTouches?: Touch[];
}
/**
 * @param {Event} e
 * @param {Element} el
 * calculates relative position of event e according to element el
 */
export declare function relativePosOfEvent(e: PageXYEvent, el: Element): [number, number, ClientRect | DOMRect];
/**
 * Gets the first parent with "data-chart-container" attribute to compute height
 */
export declare function findHeightParent(initial: HTMLElement): HTMLElement;
export declare function getResizerElement(): HTMLElement | null;
/**
 * Tries to find Y-axis element
 *
 * TODO: current chart markup is pretty stable but we should consired removing CSS class references
 *
 * @param el element which can contain Y-axis element
 * @returns {HTMLElement|*}
 */
export declare function tryFindYAxis(el: Element): Element | undefined;
export interface Dimension<A> {
    readonly clear: () => void;
    readonly valueOf: () => A;
}
/**
 * Caches element dimension until EVENT_RESIZED is received
 * @param {Element}element
 * @param {EventBus} bus
 * @param {String} property
 * @returns {{clear: (Function), valueOf: Function}}
 */
export declare function cachedDimension<K extends keyof Element>(element: Element, bus: EventBus, property: K): Dimension<Element[K]>;
/**
 * @param fn
 * @returns {Function}
 */
export declare function makeAsync(fn: () => void): () => NodeJS.Timeout;
/**
 * defines properties in object specified in getters object
 * @param {Object} object
 * @param {Object} getters
 */
export declare function setupGetters(object: tobject, getters: tobject): tobject;
declare global {
    interface Window {
        jasmine: tobject;
        testEnv: tobject;
    }
}
export declare function registerForTest(value: {
    name: string;
}): void;
export declare function addClass(element: Element, className: string): void;
export declare function removeClass(element: Element, className: string): void;
export declare function setClass(element: Element, className: string, set: boolean): void;
export declare function toRGBA(color: string, alpha: number): string;
export interface ValueAxisCountParameters {
    readonly max?: number;
    readonly size?: number;
    readonly dim?: string;
}
export declare function valueAxisCount(model: tobject, parameters: ValueAxisCountParameters): unknown;
declare global {
    interface Window {
        chart: tobject;
    }
}
/**
 * Updates options in storage with provided options obj.
 * The function will calculate delta between storage and update version.
 * Non-existing props will be created, existing - updated.
 * If storage is not provided, local storage is used instead.
 *
 */
export declare function updateOptionsInStorage(storage: Storage, chartId: string, subOptionName: string, subOptionValue: unknown): void;
/**
 @param {Array} sourceArray - source array
 @param {Array} elementsToRemove - array of elements have to be removed from source array
 @param { String } byProp - property to remove elements by
 */
export declare function removeElementsByProp<A extends Partial<Record<string, unknown>>>(sourceArray: A[], elementsToRemove: A[], byProp: string): void;
export type DeepPartial<T> = T extends (...args: unknown[]) => unknown ? T : T extends tobject ? T extends unknown[] ? DeepPartial<T[number]>[] : {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type DeepRequired<T> = T extends (...args: unknown[]) => unknown ? T : T extends tobject ? T extends unknown[] ? DeepRequired<T[number]>[] : {
    [P in keyof T]-?: DeepRequired<T[P]>;
} : T;
export type tobject = Record<string, any>;
export declare function uuid(): string;
/**
 * This functions checks if first and second number are differs by specified times
 * @param first {number}
 * @param second {number}
 * @param times {number}
 * @doc-tags utility,math
 */
export declare const isDiffersBy: (first: number, second: number, times: number) => boolean;
