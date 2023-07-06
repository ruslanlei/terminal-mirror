/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Use in SC to render styles based on condition.
 * @param condition
 * @doc-tags utility,styling
 */
export declare const ifStyle: (condition?: boolean) => import("fp-ts/function").Lazy<string> | import("styled-components").ThemedCssFunction<import("styled-components").DefaultTheme>;
