/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import * as React from 'react';
import { FC } from 'react';
import { Suggest } from '../symbol-suggest.model';
export interface SymbolSuggestListProps {
    readonly data: Suggest[];
    readonly value: string;
    readonly onChange: (suggestId: string) => void;
    readonly handleBlur?: () => void;
    readonly onCloseRequest: () => void;
    readonly className?: string;
    readonly hoveredSuggest: string | null;
    readonly setHoveredSuggest: (suggestSymbol: string | null) => void;
    readonly children?: React.ReactNode;
}
export declare const SymbolSuggestList: FC<SymbolSuggestListProps>;
