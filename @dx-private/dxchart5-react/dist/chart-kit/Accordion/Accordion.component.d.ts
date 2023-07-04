/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
export interface AccordionProps {
    readonly wrapper: ReactNode;
    readonly children?: ReactNode;
    readonly skipAnimation?: boolean;
    readonly className?: string;
    readonly isSelected?: boolean;
    readonly isHidden?: boolean;
    readonly isFocused?: boolean;
}
export declare const Accordion: React.NamedExoticComponent<AccordionProps>;
