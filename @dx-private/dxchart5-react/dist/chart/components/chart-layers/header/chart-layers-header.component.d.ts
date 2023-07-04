/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Lazy } from 'fp-ts/function';
import React from 'react';
interface ChartLayersHeaderProps {
    readonly onClose: Lazy<void>;
    readonly className?: string;
}
export declare const ChartLayersHeader: React.NamedExoticComponent<ChartLayersHeaderProps>;
export {};
