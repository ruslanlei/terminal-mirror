/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare class BondUtils {
    private static EMPTY_BOND_FRACTIONS;
    private static NDDP_MAP;
    /**
     * @param priceIncrement Price increment
     * @return Number of bond fractions, 2^n, or {@link #EMPTY_BOND_FRACTIONS} if price increment
     *         does not apply bond notation. Example:<pre>{@code
     *         32 for 0.03125
     *         64 for 0.015625
     *         128 for 0.0078125
     *         }
     *  </pre>
     */
    private static bondFractions;
    /**
     * Formats bond decimal to string representation, implementation of DXREQ-10122.
     * In case when incorrect price increment passed, empty string returned.
     *
     * @param value             Bond  value
     * @param priceIncrement    Price increment
     * @param separator         Separator of fractional and integer part
     * @return                  String representation of bond
     */
    static formatBondPrice(value: number, priceIncrement: number, separator?: string): string;
    /**
     * Formats bond decimal to string representation, implementation of DXREQ-10122
     *
     * @param value             Bond value
     * @param tdf               Tick Display Format. Expected values are 32, 64, 128
     * @param nddp              Number of Decimals in Displayed Price
     * @param separator         Separator of fractional and integer part
     * @return                  String representation of bond
     */
    private static formatBondPriceInner;
}
