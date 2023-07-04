/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { Observable } from 'rxjs';
import { Sink } from '../../context/sink2';
import { SymbolSuggestProvider } from '../../providers/symbol-suggest-provider';
import { Property } from '../../utils/property.utils';
import { Instrument } from '../model/instrument.model';
import { LocalInstrumentStore } from '../stores/instrument.store';
export interface InstrumentSelectorViewModel {
    onChangeInstrument: (instrument: Instrument) => void;
    data$: Observable<Instrument[]>;
    searchValue: Property<string>;
    searchInstruments: (value: string) => void;
    getInstrument: (instrument: Instrument['symbol']) => Observable<Option<Instrument>>;
}
export declare const createInstrumentSelectorViewModel: import("../../context/context2").Context<Record<"localInstrumentStore", LocalInstrumentStore> & Record<"symbolSuggestProvider", SymbolSuggestProvider> & Record<"chartId", string>, Sink<InstrumentSelectorViewModel>>;
