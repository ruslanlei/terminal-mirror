/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MultiChartLayout } from '../chart/model/layout.model';
import { Either } from 'fp-ts/Either';
/**
 * Tries to migrate layout. Iterates over migrations and applies them 1-by-1.
 * Will migrate only scripts with version > layout version and <= current chart version.
 *
 * @param layout - layout to migrate
 * @doc-tags layout,migration
 */
export declare const tryMigrate: (layout: MultiChartLayout) => Either<Error, MultiChartLayout>;
