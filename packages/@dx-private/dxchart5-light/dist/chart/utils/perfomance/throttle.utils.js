/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{uuid as m}from"../uuid.utils";import{animationFrameThrottled as c}from"./request-animation-frame-throttle.utils";export function throttle(i,e,o){let n;const r=m();function f(){const t=n;n=void 0,t&&e(t)}return function(t){const a=n;n=t,i&&t.preventDefault(),!a&&!(typeof o=="function"&&o())&&c(r,f)}}
