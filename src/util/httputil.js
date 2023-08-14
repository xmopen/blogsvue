// HTTPGet provide http get request.
import axios from "axios";

// httpInstance http 请求实例.
const httpInstance = axios.create({
    baseURL:"http://localhost:8848",
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
    let resp = null
    httpInstance.get(url).then(function (response) {
        resp = response
    })
    return resp
}

function httpPost(url, data) {
    httpInstance.post(url,data).then(function (response) {
        console.log(response)
    })
}