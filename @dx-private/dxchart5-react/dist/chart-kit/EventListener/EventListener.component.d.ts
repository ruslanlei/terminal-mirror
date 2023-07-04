/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ReactPortal, ReactNode } from 'react';
export type TEventListenerProps = {
    capture?: boolean;
    target: EventTarget | string;
    children: ReactNode | ReactPortal;
} & {
    [onEvent: string]: Function | boolean | string | object | undefined;
};
export declare class EventListener extends React.Component<TEventListenerProps> {
    componentDidMount(): void;
    componentWillUpdate(nextProps: TEventListenerProps): void;
    componentDidUpdate(prevProps: TEventListenerProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    private addListeners;
    private removeListeners;
    private getTarget;
    private getHandlers;
}
