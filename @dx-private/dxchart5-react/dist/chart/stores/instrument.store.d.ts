/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Instrument } from '../model/instrument.model';
/**
 * Stores instruments for application.
 */
export interface InstrumentStore {
    getInstruments(): Instrument[];
    getInstrumentBySymbol(symbol: string): Instrument | undefined;
}
/**
 * Local store which does not sync with backend but stores/caches all data locally.
 */
export interface LocalInstrumentStore extends InstrumentStore {
    updateInstruments(instruments: Instrument[]): void;
}
export declare const createLocalInstrumentStore: () => LocalInstrumentStore;
