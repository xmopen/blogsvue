import HTTP from "../util/httputil"

// IndexList get index list.
// This method return Null to indicate that the HTTP Status is not a success.
export  function IndexList() {
    return HTTP("GET", "/openxm/api/v1/index/list?limit=6&type=0").then(function (response) {
        return response.data
    })
}

// ArticleInfo return article info by article id.
export function ArticleInfo(id) {
    return HTTP("GET", "/openxm/api/v1/article/info?id=" + id).then(function (response) {
        return response.data
    })
}

