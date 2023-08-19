// GetURLParamValue get param value from url.
export default function GetURLParamValue(key,url) {
    // http://localhost:8080/#/article/info.html?id=1&k=v
    let sourceUrl = url.split('#')[1]
    let params = sourceUrl.split('?')[1]
    let data = params.split('&')
    for (let i = 0; i < data.length; i++) {
        let kv = data[i].split('=')
        if (kv[0] === key){
            return kv[1]
        }
    }
    return ""
}