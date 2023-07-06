/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { CKButtonProps } from '../../../chart-kit/Button/default/Button.component';
export interface SwitchAxisButtonProps extends CKButtonProps {
    isActive: boolean;
}
export declare const PercentButtonStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<CKButtonProps>, any, SwitchAxisButtonProps, never>;
