import { Browser } from "playwright";
export declare class searchConfiguration {
    tool: {
        name: 'axios' | 'browser';
        agent: Browser | null;
    };
    objectsCommonSelector: string;
    multiPages: {
        status: boolean;
        numberLastPageSelector: string | null;
    };
    constructor(configuration: any);
}
