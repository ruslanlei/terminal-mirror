/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const eventsDictionary: {
    earnings: {
        type: string;
        basicEps: string;
        dilutedEps: string;
        periodEnding: string;
        date: string;
    };
    dividends: {
        type: string;
        gross: string;
        date: string;
    };
    splits: {
        type: string;
        date: string;
    };
    'conference-calls': {
        type: string;
        title: string;
        date: string;
    };
};
export type EventsDictionary = typeof eventsDictionary;
