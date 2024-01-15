import axios from "axios";

const httpInstance = axios.create({
    baseURL: "http://openxm.cn",
    // baseURL: "http://127.0.0.1:8848",
    timeout: 5000,
})

// GetBlogArchiveList return blog archive list
export function GetBlogArchiveList(offset,limit) {
    return httpInstance.get("/openxm/api/v1/archive/list?offset="+offset+"&limit="+limit).then(function (response) {
        return response.data
    })
}

export function GetBlogArticleWithArchive(archive) {
    return httpInstance.get("/openxm/api/v1/archive/list/article?archive_id="+archive).then(function (response) {
        return response.data
    })
}