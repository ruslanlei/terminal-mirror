/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MultiChartLayout } from '../chart/model/layout.model';
export type MigrationFnType = (layout: Record<string, any>) => MultiChartLayout;
export interface LayoutMigrationScript {
    name: string;
    migrateFn: MigrationFnType;
}
