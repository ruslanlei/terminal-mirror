/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface TimeZoneInputSearchProps {
    readonly value?: string;
    readonly onValueChange: (value: string) => void;
}
export declare const TimeZoneInputSearch: React.FC<TimeZoneInputSearchProps>;
