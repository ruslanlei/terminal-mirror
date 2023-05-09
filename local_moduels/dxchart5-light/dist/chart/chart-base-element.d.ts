/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Subscription } from 'rxjs/internal/Subscription';
import { Unsubscriber } from '../common/common-types';
export type ChartEntityState = 'initial' | 'active' | 'deactivated' | 'disabled';
/**
 * Chart entity has the following lifecycle: initial -> active <=> deactivated -> disposed.
 * Methods of chart entity allows to transit entity between its states.
 */
export interface ChartEnity {
    /** Make entity active. Next allowed stated: deactivated,disposed */
    activate(): void;
    /** Make entity inactive. Next allowed states: active,disposed. */
    deactivate(): void;
    /** Make entity disabled & inactive, cannot activate it */
    disable(): void;
    /** Make entity enabled & active */
    enable(): void;
    /** Get current state of chart entity */
    getState(): ChartEntityState;
}
/**
 * Base class for chart elements. Contains lifecycle support, utility methods.
 *
 * Chart entity state transition: INITIAL -> ACTIVE <-> DEACTIVATED -> DISPOSED
 */
export declare abstract class ChartBaseElement implements ChartEnity {
    private subscriptions;
    private _state;
    private entities;
    /**
     * This method is used to activate a protected feature.
     * It does not take any arguments and does not return anything.
     */
    protected doActivate(): void;
    /**
     * This method is used to unsubscribe from all events.
     * It clears the subscriptions array.
     * @returns {void}
     */
    protected doDeactivate(): void;
    /**
     * Enables the functionality of an object.
     * If the object is not currently active, it sets the state to 'deactivated' and activates it.
     * @returns {void}
     */
    enable(): void;
    /**
     * Disables the current object if it is not already disabled.
     * If the object is not disabled, it will be deactivated and its state will be set to 'disabled'.
     * @returns {void}
     */
    disable(): void;
    /**
     * Activates the entity and all its child entities.
     * If the entity is already active, it does nothing.
     * If the entity is disabled, it does nothing.
     * @returns {void}
     */
    activate(): void;
    /**
     * Deactivates the entity and all its child entities.
     * If the entity is already disabled, it does nothing.
     * If the entity is not yet deactivated, it calls the doDeactivate method and sets the state to 'deactivated'.
     * Finally, it deactivates all child entities.
     * @returns {void}
     */
    deactivate(): void;
    /**
     * Returns the current state of the ChartEnitity instance.
     * @returns {ChartEntityState} The current state of the ChartEnitity instance.
     */
    getState(): ChartEntityState;
    /**
     * Adds default subscription
     * @param fn - an unsubscriber function
     * @protected
     */
    protected addSubscription(fn: Unsubscriber): void;
    /**
     * Adds rxjs subscription
     * @param subscription
     * @protected
     */
    protected addRxSubscription(subscription?: Subscription): void;
    /**
     * Adds a new entity to the entities array and activates it if the parent entity is active.
     *
     * @param {Entity} entity - The entity to be added to the entities array.
     * @returns {void}
     */
    addChildEntity(entity: ChartEnity): void;
    /**
     * Removes a entity from the entities array.
     *
     * @param {ChartEnity} entity - The entity to be removed.
     * @returns {void}
     */
    removeChildEntity(entity: ChartEnity): void;
}
