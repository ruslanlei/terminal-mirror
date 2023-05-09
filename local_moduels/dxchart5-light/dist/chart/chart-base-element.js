/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export class ChartBaseElement{constructor(){this.subscriptions=[],this._state="initial",this.entities=[]}doActivate(){}doDeactivate(){this.subscriptions.forEach(t=>t()),this.subscriptions=[]}enable(){this._state!=="active"&&(this._state="deactivated",this.activate())}disable(){this._state!=="disabled"&&(this.deactivate(),this._state="disabled")}activate(){this._state!=="disabled"&&(this._state!=="active"&&(this.doActivate(),this._state="active"),this.entities.forEach(t=>t.activate()))}deactivate(){this._state!=="disabled"&&(this._state!=="deactivated"&&(this.doDeactivate(),this._state="deactivated"),this.entities.forEach(t=>t.deactivate()))}getState(){return this._state}addSubscription(t){this.subscriptions.push(t)}addRxSubscription(t){t&&this.subscriptions.push(t.unsubscribe.bind(t))}addChildEntity(t){this.entities.push(t),this._state==="active"&&t.activate()}removeChildEntity(t){this.entities=this.entities.filter(i=>i!==t)}}
