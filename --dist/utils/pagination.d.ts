export declare class Pagination {
    getPagination(page: number, size: number): {
        limit: number;
        offset: number;
    };
    getPagingData(totalObjects: number, page: number, limit: number): {
        totalPages: number;
        currentPage: number;
    };
}
