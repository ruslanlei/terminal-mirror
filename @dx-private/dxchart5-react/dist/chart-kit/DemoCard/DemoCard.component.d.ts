/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { CSSProperties } from 'react';
import { ReactNode } from 'react';
interface DemoCardProps {
    title?: string;
    children: ReactNode;
    style?: CSSProperties;
}
export declare const DemoCard: React.NamedExoticComponent<DemoCardProps>;
export {};
