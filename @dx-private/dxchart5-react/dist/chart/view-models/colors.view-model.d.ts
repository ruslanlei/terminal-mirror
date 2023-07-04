/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { UserDataViewModel } from './user-data.view-model';
import { Sink } from '../../context/sink2';
export interface ColorsViewModel {
    readonly customColors: Observable<string[]>;
    readonly colors: Observable<string[]>;
    readonly addNewColor: (color: string) => void;
    readonly deleteColor: (color: string) => void;
    readonly updateColor: (color: string, updateAtIndex: number) => void;
    readonly isDefaultColor: (color: string) => boolean;
}
export declare const createColorsViewModel: import("../../context/context2").Context<Record<"userDataViewModel", UserDataViewModel> & Record<"colorPalette", string[]>, Sink<ColorsViewModel>>;
export declare const checkForColorDuplicates: (color: string) => (colors: string[]) => boolean;
