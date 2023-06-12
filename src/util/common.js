export default function HasCode(param) {
    var hash = 0, i, chr;
    if (param.length === 0) return hash;
    for (i = 0; i < param.length; i++) {
        chr = param.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

