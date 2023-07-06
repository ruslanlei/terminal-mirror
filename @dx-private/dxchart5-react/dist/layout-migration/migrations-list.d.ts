/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LayoutMigrationScript } from './migration.model';
interface MigrationInfo {
    /**
     * Version in which migration takes place.
     */
    version: string;
    /**
     * The migrations to perform.
     * !!! ORDER MATTERS !!!
     */
    scripts: LayoutMigrationScript[];
}
/**
 * The list of all migrations.
 * For new migrations use "NEXT_RELEASE_VERSIO_N" as a version - it will be updated during release.
 * @doc-tags layout,migration
 */
export declare const MIGRATIONS_LIST: MigrationInfo[];
export {};
