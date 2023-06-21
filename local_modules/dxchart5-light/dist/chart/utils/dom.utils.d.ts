/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * @param {Element} element
 * @param {function} listener
 * @param {string} eventType
 * @param {boolean?} useCapture
 * @return {Function}
 */
export declare function subscribeListener<K extends keyof GlobalEventHandlersEventMap>(element: EventTarget, listener: (e: GlobalEventHandlersEventMap[K]) => void, eventType: K, useCapture?: boolean): () => void;
