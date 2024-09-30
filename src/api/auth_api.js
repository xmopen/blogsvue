import axios from "axios";

// httpInstance http 请求实例.
const httpInstance = axios.create({
    // baseURL:"http://127.0.0.1:8849",
    baseURL:"http://43.136.18.173",
    // baseURL:"http://openxm.cn",
    timeout:5000,
})

// Register user register to openxm.
export  function Register(data) {
    return httpInstance.post("/openxm/api/v1/auth/register",data).then(function (response) {
        return response.data
    })
}

export function Login(data) {
    return httpInstance.post("/openxm/api/v1/auth/login",data).then(function (response) {
        return response.data
    })
}

// CheckSession check xm user session with token
export function CheckSession(token) {
    return httpInstance.get("/openxm/api/v1/auth/check/session?xm_token="+token).then(function (response) {
        return response.data
    })
}

// SendGenerateMailCode 生成验证码。
export function SendGenerateMailCode(data){
    return httpInstance.post("/openxm/api/v1/mail/generate/code",data).then(function (response) {
        return response.data
    })
}