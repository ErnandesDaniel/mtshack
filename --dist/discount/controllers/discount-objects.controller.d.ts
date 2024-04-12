import { discountObjectsService } from "../services/discount-objects.service";
export declare class discountObjectsController {
    private discountService;
    constructor(discountService: discountObjectsService);
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
