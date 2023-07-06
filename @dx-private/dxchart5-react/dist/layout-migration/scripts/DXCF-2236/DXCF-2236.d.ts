/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LayoutMigrationScript } from '../../migration.model';
import { layout } from './DXCF-2236-layout';
export type LayoutType = typeof layout['layouts'][0];
export declare const DXCF_2236: LayoutMigrationScript;
