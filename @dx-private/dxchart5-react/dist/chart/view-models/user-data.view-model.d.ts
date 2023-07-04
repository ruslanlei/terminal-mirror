/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../utils/property.utils';
import { UserData, UserDataProvider } from '../../providers/user-data-provider';
import { Sink } from '../../context/sink2';
import { ThemeType } from '../model/theme.model';
type CustomColors = UserData['customColors'];
type CustomPeriods = UserData['customPeriods'];
type FavoriteDrawings = UserData['favoriteDrawings'];
export interface UserDataViewModel {
    readonly userData: Property<UserData>;
    readonly updateCustomColors: (colors: CustomColors) => void;
    readonly updateCustomPeriods: (periods: CustomPeriods) => void;
    readonly updateFavoriteDrawings: (drawings: FavoriteDrawings) => void;
    readonly updateUserDataTheme: (theme: ThemeType) => void;
    readonly updateSidebarMode: (isExpanded: boolean) => void;
    readonly updateTimeframePresetsList: (timeframePresets: Array<string>) => void;
    readonly updateWidgetPosition: (widget: Widget, position: Position) => void;
}
export type Widget = 'chartLayersPopover' | 'drawingsToolbar';
export interface Position {
    top: number;
    left: number;
}
export interface Size {
    height: number;
    width: number;
}
export declare const INITIAL_USER_DATA: UserData;
export declare const createUserDataViewModel: import("../../context/context2").Context<Record<"userDataProvider", UserDataProvider> & Record<"userDataLoaded", UserData>, Sink<UserDataViewModel>>;
export {};
