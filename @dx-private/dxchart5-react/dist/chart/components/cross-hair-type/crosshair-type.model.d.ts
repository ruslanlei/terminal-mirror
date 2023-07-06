/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export declare const crosshairTypes: readonly ["NoCrosshair", "Crosshair"];
export type CrosshairType = typeof crosshairTypes[number];
export declare function isCrosshairType(value: unknown): value is CrosshairType;
export declare const mapTypeToString: (type: CrosshairType) => string;
export declare const mapTypeToChartSettings: (value: CrosshairType) => boolean;
export declare const mapChartSettingsToType: (type: string) => CrosshairType;
export declare const mapTypeToIcon: (type: CrosshairType) => React.ReactNode;
