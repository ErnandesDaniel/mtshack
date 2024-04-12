import { discountObject } from "../models/discount-objects.model";
export declare class discountObjectsService {
    private discountModel;
    constructor(discountModel: typeof discountObject);
    getAll(): Promise<{
        formattedDiscountsArray: {
            id: any;
            oldPrice: number;
            newPrice: number;
            imgURL: string;
            detailedURL: string;
        }[];
    }>;
}
