const formResponse ={
  success:(res,results,status)=>{
      const response={
          isSuccess : true,
          status : status,
          results : results
      }
      res.json(response);
  },
  err : (res,error,status)=>{
      const response={
          isSuccess : false,
          status : status,
          results : error
      }
      res.json(response);
  },
  pagination :({query},res,results)=>{
      const page =Number(query.page);
      const limit = Number(query.limit);
      const prevPage = page === 1 ? "" : `/product/?page=${page - 1}&limit=${limit}`;
      const nextPage = results.length < limit ? "" : `/product/?page=${page + 1}&limit=${limit}`;
      const responseObject = {
          success: true,
          status: 200,
          results,
          pageInfo: {
            currentPage: query.page,
            limit: query.limit,
            prevPage,
            nextPage,
          },
        };
        res.json(responseObject);
  }
  // pagination :({query},res,results)=>{
  //     const page =Number(query.page);
  //     const limit = Number(query.limit);
  //     const category = query.category;
  //     const prevPage = page === 1 ? "" : `/product/?category=${category}&page=${page - 1}&limit=${limit}`;
  //     const nextPage = results.length < limit ? "" : `/product/?category=${category}&page=${page + 1}&limit=${limit}`;
  //     const responseObject = {
  //         success: true,
  //         status: 200,
  //         results,
  //         pageInfo: {
  //           currentPage: query.page,
  //           limit: query.limit,
  //           prevPage,
  //           nextPage,
  //         },
  //       };
  //       res.json(responseObject);
  // }
}

module.exports = formResponse;