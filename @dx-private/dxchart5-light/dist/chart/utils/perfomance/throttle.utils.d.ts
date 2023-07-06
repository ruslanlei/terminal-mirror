/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
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
