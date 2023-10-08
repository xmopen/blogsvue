import axios from "axios";

// httpInstance http 请求实例.
const httpInstance = axios.create({
    baseURL: "http://127.0.0.1:8848",
    timeout: 5000,
})

// IndexList get index list.
// This method return Null to indicate that the HTTP Status is not a success.
export function IndexList() {
    return httpInstance.get("/openxm/api/v1/index/list?limit=6&type=0").then(function (response) {
        return response.data
    })
}

// ArticleInfo return article info by article id.
export function ArticleInfo(id) {
    return httpInstance.get("/openxm/api/v1/article/info?id=" + id).then(function (response) {
        return response.data
    })
}

// Comment comment for article
export function Comment(commentData) {
    return httpInstance.post("/openxm/api/v1/comment/do",commentData).then(function (response) {
        return response.data
    })
}

// ArticleCommentList return ArticleCommentList.
export function ArticleCommentList(articleID) {
    return httpInstance.get("/openxm/api/v1/comment/list?article_id=" + articleID).then(function (response) {
        return response.data
    })
}


