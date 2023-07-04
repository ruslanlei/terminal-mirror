/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
interface ChartLayersFooterProps {
    readonly onCreateGroup: () => void;
    readonly onDelete: () => void;
    readonly showBorder?: boolean;
}
export declare const ChartLayersFooter: React.NamedExoticComponent<ChartLayersFooterProps>;
export {};
