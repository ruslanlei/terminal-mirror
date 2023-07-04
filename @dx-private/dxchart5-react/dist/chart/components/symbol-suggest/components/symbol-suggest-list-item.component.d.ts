/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FC, MutableRefObject } from 'react';
export interface SymbolSuggestListItemProps {
    readonly value: string;
    readonly handleHover: (symbol: string) => void;
    readonly handleClick: (symbol: string) => void;
    readonly symbol: string;
    readonly description?: string;
    readonly type: string;
    readonly className?: string;
    readonly isHovered: boolean;
    readonly elRef?: MutableRefObject<HTMLDivElement | null>;
}
export declare const SymbolSuggestListItem: FC<SymbolSuggestListItemProps>;
