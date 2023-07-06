/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartPaneViewModel } from '../view-models/chart-pane.view-model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const ChartPaneContainer: import("../../context/context2").Context<Record<"chartPaneViewModel", ChartPaneViewModel> & Record<"chartInstance", ChartWithModules>, React.FC<Record<string, any>>>;
