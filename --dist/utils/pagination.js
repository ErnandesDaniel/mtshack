"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    getPagination(page, size) {
        const limit = size ? +size : 10;
        const offset = page ? page * limit : 0;
        return { limit, offset };
    }
    ;
    getPagingData(totalObjects, page, limit) {
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalObjects / limit);
        return { totalPages, currentPage };
    }
    ;
}
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map