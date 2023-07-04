/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Event as ProviderEvent } from '../../providers/events-data-provider';
export interface EventsGeneratorConfig {
    readonly quantity: number;
    readonly startTimestamp: number;
    readonly period: number;
}
export declare const defaultConfig: EventsGeneratorConfig;
/**
 * Generates mock events data.
 *
 * @param config
 *   quantity - avg number of events
 *
 * @return Array<ProviderEvent>
 */
export declare const generateEvents: (config?: EventsGeneratorConfig) => ProviderEvent[];
