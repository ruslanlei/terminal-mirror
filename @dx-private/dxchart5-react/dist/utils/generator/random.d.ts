/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * A random number generator with ability to set a seed
 * Controlled random is crucial for performance tests' consitency.
 * @param seed
 * @doc-tags math
 */
export declare function mulberry32(seed: number): () => number;
