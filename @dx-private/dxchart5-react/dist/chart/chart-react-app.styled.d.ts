/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface ChartReactAppStyledProps {
    readonly width?: number;
    readonly height?: number;
    readonly showPopupsOutside?: boolean;
}
export declare const CHART_REACT_WRAPPER_ID = "chart-react-wrapper";
export declare const ChartReactAppStyled: import("styled-components").StyledComponent<"div", any, ChartReactAppStyledProps, never>;
export declare const OfflineAlert: import("styled-components").StyledComponent<"div", any, {}, never>;
