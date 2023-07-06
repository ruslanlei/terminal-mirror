/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import t from"./chart/bootstrap";const r=(a,o={})=>new t(a,o);window.DXChart=Object.assign(Object.assign({},window.DXChart),{ChartBootstrap:t,createChart:r});export{r as createChart,t as ChartBootstrap};
