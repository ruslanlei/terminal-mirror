/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { FC } from 'react';
/**
 * Creates a wrapper component for profiling.
 * @param name - name of original component
 * @param Component - original component
 */
export declare const createProfileFC: <A extends Record<string, any>>(name: string, Component: React.FC<A>) => React.FC<A>;
