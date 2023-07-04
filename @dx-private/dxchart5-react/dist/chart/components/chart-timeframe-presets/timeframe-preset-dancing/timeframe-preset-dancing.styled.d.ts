/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { TimeframePresetItemStyledProps } from '../timeframe-preset/timeframe-preset.styled';
export interface TimeframePresetItemDancingStyledProps extends TimeframePresetItemStyledProps {
    readonly animated: boolean;
}
export declare const TimeframePresetItemDancingStyled: import("styled-components").StyledComponent<import("react").NamedExoticComponent<import("../../../../chart-kit/Button/default/Button.component").CKButtonProps>, any, TimeframePresetItemStyledProps & TimeframePresetItemDancingStyledProps, never>;
export declare const TimeframePresetItemDancingIconWrapperStyled: import("styled-components").StyledComponent<import("react").FC<import("../../../../chart-kit/IconWrapper/IconWrapper.component").IconWrapperProps>, any, {}, never>;
