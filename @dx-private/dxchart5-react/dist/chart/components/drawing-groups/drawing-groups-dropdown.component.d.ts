/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LayerItemsGroup } from '../../model/chart-layers.model';
export interface DrawingGroupsDropdownProps {
    readonly groups: LayerItemsGroup[];
    readonly selectedGroup: LayerItemsGroup;
    readonly addGroup: (name: string) => void;
    readonly selectGroup: (id: string) => void;
    readonly deleteGroup: (id: string) => void;
    readonly renameGroup: (id: string, name: string) => void;
}
export declare const DrawingGroupsDropdown: React.NamedExoticComponent<DrawingGroupsDropdownProps>;
