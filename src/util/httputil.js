// HTTPGet provide http get request.
import axios from "axios";

// httpInstance http 请求实例.
const httpInstance = axios.create({
    baseURL:"http://127.0.0.1:8848",
    // baseURL:"http://43.136.18.173:8848",
    timeout:5000,
})

const HTTPGet = "GET"

// HTTPGet provide http get method.
export default function HTTP(method,url,data)  {
    if (method === HTTPGet){
        return httpGet(url)
    }
    return httpPost(url,data)
}

function httpGet(url) {
    return httpInstance.get(url)
}

function httpPost(url, data) {
   return  httpInstance.post(url,data)
}