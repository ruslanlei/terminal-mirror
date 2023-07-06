/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ComponentType } from 'react';
import { CKColorPickerProps } from '../chart-kit/ColorPicker/ColorPicker.component';
import { TabTypeWithIcon } from '../chart/components/chart-settings/chart-settings.model';
import { ChartSnapshotMenuItem } from '../chart/components/chart-snapshot/chart-snapshot-dropdown.component';
import { ChartToolbarProps } from '../chart/components/chart-toolbar/chart-toolbar.component';
import { ChartLoadingProps } from '../chart/components/loading/loading.component';
import { InstrumentSuggestComponentProps } from '../chart/containers/instrument-selector/instrument-selector.model';
import { ChartReactAPI } from '../chart/view-models/api/chart-react-api.view-model';
export type ToolbarButtonDeclaration = [string, React.ComponentType<ChartReactAPIProps>] | string;
type OriginalTab = 'ChartGeneralTab' | 'ChartTradingTab' | 'ChartLegendTab' | 'ChartScalesTab' | 'ChartMarketTab' | 'ChartColorsTab' | 'ChartEventsTab' | 'ChartPaddingsTab';
type TabDeclaration = TabTypeWithIcon | OriginalTab;
type SnapshotMenuDeclaration = ChartSnapshotMenuItem | string;
export interface ComponentOverridingTypes {
    readonly ColorPicker: ComponentType<CKColorPickerProps>;
    readonly ChartLoading: ComponentType<ChartLoadingProps>;
    readonly ChartSettingsTabs: TabDeclaration[];
    readonly InstrumentSuggestComponent?: ComponentType<InstrumentSuggestComponentProps>;
    readonly Toolbar: {
        readonly ToolbarButtons: Array<ToolbarButtonDeclaration>;
        readonly ToolbarContainer: Element | null;
        readonly ToolbarComponent?: ComponentType<ChartToolbarProps>;
    };
    readonly showThemeSwitcher: boolean;
    readonly SnapshotMenuItems: SnapshotMenuDeclaration[];
}
export interface ChartReactAPIProps {
    readonly chartReactAPI: ChartReactAPI;
    readonly chartId: string;
}
/**
 * This list defines default chart toolbar buttons and their order.
 * If you remove or reorder a key in this list, this change will affect the toolbar.
 * The keys in this list should have the exact same name as its button containers.
 * You can also add some custom buttons (not context buttons)
 * to this list in the following format: ['buttonKey', CustomButtonComponent].
 * CustomButtonComponent - is a React component.
 * @doc-tags tricky
 */
export declare const DEFAULT_BUTTONS: Array<ToolbarButtonDeclaration>;
export declare const DEFAULT_TABS_WITH_ICON: Array<TabDeclaration>;
export declare const DEFAULT_SNAPSHOT_ITEMS: Array<SnapshotMenuDeclaration>;
export interface CustomToolbarButton {
    readonly index?: number;
    readonly key?: string;
    readonly button: React.ComponentType<ChartReactAPIProps>;
}
/**
 * @name addCustomToolbarButtons
 * @description
 * You can use this 'helper' function to add custom buttons.
 * The result of this function is an array with toolbar button declarations (it also includes the default buttons).
 */
export declare const addCustomToolbarButtons: (...buttons: CustomToolbarButton[]) => Array<ToolbarButtonDeclaration>;
export declare const addCustomSettingsTab: (customTabs: TabDeclaration[], index: number) => TabDeclaration[];
export declare const removeSettingsTab: (tabs: TabDeclaration[], tab: OriginalTab) => TabDeclaration[];
export declare const overrideDefaultTab: (customTabName: string, customDefaultTab: TabDeclaration) => TabDeclaration[];
export declare const DEFAULT_TOOLBAR: {
    ToolbarContainer: null;
    ToolbarButtons: ToolbarButtonDeclaration[];
    ToolbarComponent: import("react").MemoExoticComponent<(props: ChartToolbarProps) => JSX.Element>;
};
export declare const DEFAULT_COMPONENTS: {
    ChartLoading: import("react").NamedExoticComponent<ChartLoadingProps>;
    ColorPicker: import("react").FC<CKColorPickerProps>;
    ChartSettingsTabs: TabDeclaration[];
    Toolbar: {
        ToolbarContainer: null;
        ToolbarButtons: ToolbarButtonDeclaration[];
        ToolbarComponent: import("react").MemoExoticComponent<(props: ChartToolbarProps) => JSX.Element>;
    };
    showThemeSwitcher: boolean;
    SnapshotMenuItems: SnapshotMenuDeclaration[];
};
/**
 * ComponentOverridingContext gives our clients a way to override our default components with the custom ones.
 * ComponentOverridingContext uses react context, so it works in the same way https://reactjs.org/docs/context.html.
 * There are two ways to use component overriding: for function components you can use {@link useComponentOverriding} hook,
 * const myFc = () => {
 *     const { ColorPicker } = useContext(ComponentOverridingContext);;
 *     return <ColorPicker />
 * }
 * For class components you can use ComponentOverridingContext.Consumer
 * <ComponentOverridingContext.Consumer>
        {({ ColorPicker }) => (<ColorPicker/>)}
    </ComponentOverridingContext.Consumer>
 */
export declare const ComponentOverridingContext: import("react").Context<ComponentOverridingTypes>;
export {};
