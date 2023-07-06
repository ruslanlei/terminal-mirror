/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface IconsRenderContextProps {
    svgShapeRendering: string;
}
export declare const DEFAULT_ICONS_RENDER_CONTEXT: {
    svgShapeRendering: string;
};
export declare const IconsRenderContext: import("react").Context<IconsRenderContextProps>;
