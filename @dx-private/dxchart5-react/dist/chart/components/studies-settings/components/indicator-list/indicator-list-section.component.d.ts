/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { ReactNode } from 'react';
interface IndicatorListSectionProps {
    readonly title?: string;
    readonly children: ReactNode;
    readonly header?: ReactNode;
    readonly footer?: ReactNode;
    readonly actionButton?: ReactNode;
    readonly ariaLabel?: string;
    readonly headingId?: string;
}
export declare const IndicatorListSection: React.NamedExoticComponent<IndicatorListSectionProps>;
export {};
