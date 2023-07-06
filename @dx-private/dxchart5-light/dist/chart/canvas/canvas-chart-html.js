/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export default a=>`<div data-element="chartResizer" style="position: relative; min-height: 20px; height: 100%; width: 100%; touch-action: manipulation; z-index: 0;">
	<div data-element="chartContainer" style="position: absolute; height: 100%; width: 100%;" class="chart chartArea--graph">
		<div data-element="canvasArea" style="position: relative; height: 100%; width: 100%; touch-action: manipulation;">
			<canvas data-element="snapshotCanvas" style="z-index: 0"></canvas>
			<canvas data-element="backgroundCanvas" style="z-index: 1"></canvas>
			<canvas data-element="mainCanvas" style="z-index: 2"></canvas>
			<canvas data-element="staticDrawingCanvas" style="z-index: 3"></canvas>
			<canvas data-element="dataSeriesCanvas" style="z-index: 5"></canvas>
			<canvas data-element="overDataSeriesCanvas" style="z-index: 6"></canvas>
			<canvas data-element="dynamicDrawingCanvas" style="z-index: 7"></canvas>
			<canvas data-element="yAxisLabelsCanvas" style="z-index: 8"></canvas>
			<canvas data-element="crossToolCanvas" style="z-index: 9"></canvas>
			<canvas data-element="hitTestCanvas" style="z-index: 10"></canvas>
${a?`			<p style="position: absolute; visibility: hidden;">If you have any suggestions or are experiencing any issues, please feel free to contact us at <a href="https://devexperts.com/dxcharts/">devexperts.com</a></p>
`:""}		</div>
	</div>
</div>
`;
