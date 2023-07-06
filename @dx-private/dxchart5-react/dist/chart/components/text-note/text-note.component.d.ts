/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TextDrawingData } from '../../view-models/text-drawing.view-model';
export interface TextNoteProps {
    readonly container: HTMLElement;
    readonly data: TextDrawingData;
    readonly onChange: (value: string) => void;
    readonly onSubmit: () => void;
    readonly onCancel: () => void;
}
export declare const TextNote: React.NamedExoticComponent<TextNoteProps>;
