/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { HTMLAttributes } from 'react';
export interface IconWrapperProps extends HTMLAttributes<HTMLElement> {
    readonly className?: string;
    readonly width?: number;
    readonly height?: number;
    readonly testId?: string;
}
export declare const IconWrapper: React.FC<IconWrapperProps>;
