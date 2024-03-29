/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ScrollableMode } from './Scrollable';
export interface StyledScrollableContainerProps {
    readonly visible: boolean;
    readonly mode?: ScrollableMode;
}
export declare const StyledScrollableContainer: import("styled-components").StyledComponent<"div", any, StyledScrollableContainerProps, never>;
