/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Drawer } from './drawing-manager';
/**
 * Container for grouping multiple drawers.
 * Try to keep simple, not overkill with sorting.
 */
export declare class CompositeDrawer<D extends Drawer = Drawer> implements Drawer {
    private readonly drawers;
    constructor(drawers?: Map<string, D>);
    draw(): void;
    addDrawer(drawer: D, drawerName?: string): void;
    drawLastBar(): void;
    removeDrawer(drawer: D): void;
    removeDrawerByName(drawerName: string): void;
    getDrawer(drawerName: string): D | undefined;
    moveTop(drawer: D): void;
    moveTopByName(drawerName: string): void;
    getSize(): number;
    getAll(): Map<string, D>;
    getCanvasIds(): Array<string>;
}
