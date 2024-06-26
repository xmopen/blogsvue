import axios from "axios";

// httpInstance http 请求实例.
const httpInstance = axios.create({
    baseURL: "http://openxm.cn",
    // baseURL: "http://127.0.0.1:8848",
    timeout: 5000,
})

// IndexList get index list.
// This method return Null to indicate that the HTTP Status is not a success.
export function IndexList(offset,limit) {
    return httpInstance.get("/openxm/api/v1/index/list?type=0&limit="+limit+"&offset="+offset).then(function (response) {
        return response.data
    })
}

// ArticleInfo return artilce info by artilce id.
export function ArticleInfo(id) {
    return httpInstance.get("/openxm/api/v1/article/info?id=" + id).then(function (response) {
        return response.data
    })
}

// Comment comment for artilce
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


// GetHotArticleList return host artilce list
export function GetHotArticleList() {
    return httpInstance.get("/openxm/api/v1/article/hot?limit=4").then(function (response) {
        return response.data
    })
}

// ReportVisit 上报访问。
export function ReportVisit(path){
    return httpInstance.get("/openxm/api/v1/report?report_path="+path).then(function (response) {
        return response.data
    })
}