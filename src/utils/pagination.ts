export class Pagination{

  getPagination(page:number, size:number){

    const limit = size ? +size : 10;

    const offset = page ? page * limit : 0;

    return { limit, offset };

  };

  getPagingData(totalObjects:number, page:number, limit:number){

    const currentPage=page?+page:0;

    const totalPages=Math.ceil(totalObjects/limit);

    return {totalPages, currentPage};

  };

}