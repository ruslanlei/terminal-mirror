/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const namedMemo: <A extends Record<string, any>>(name: string, Component: import("react").FC<A>, propsAreEqual?: ((prevProps: Readonly<import("react").PropsWithChildren<A>>, nextProps: Readonly<import("react").PropsWithChildren<A>>) => boolean) | undefined) => import("react").FC<A>;
export declare const namedMemoRef: <A extends Record<string, any>, Ref>(name: string, Component: import("react").ForwardRefRenderFunction<Ref, A>) => import("react").FC<A & import("react").RefAttributes<Ref>>;
