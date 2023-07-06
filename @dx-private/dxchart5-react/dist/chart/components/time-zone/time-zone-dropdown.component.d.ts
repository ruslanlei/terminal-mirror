/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TimeZone } from '@dx-private/dxchart5-light/dist/chart/model/time-zone.model';
export interface TimeZoneDropdownProps {
    readonly value: string;
    readonly currentExchange: string;
    readonly timeZones: Array<TimeZone>;
    readonly onSelect: (timeZone: string) => void;
    readonly onSearchTimezone: (value: string) => void;
}
export declare const TimeZoneDropdown: React.FC<TimeZoneDropdownProps>;
