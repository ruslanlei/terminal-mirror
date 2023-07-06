/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Suggest } from '../../components/symbol-suggest/symbol-suggest.model';
import { Instrument } from '../../model/instrument.model';
export interface InstrumentSuggestComponentProps {
    onInstrumentChanged: (instrument: Instrument) => void;
    instrument?: string;
}
export declare const toSuggest: (instrument: Instrument, index: number) => Suggest;
export declare const toInstrument: (suggest: Suggest) => Instrument;
