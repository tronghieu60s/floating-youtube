function splitUrlYoutube(url, cb) {
    url = decodeURI(url);
    let begin = url.indexOf("=");
    let end = url.indexOf("&");

    let hostUrl = url.slice(0, begin);
    let id = url.slice(begin + 1, end === -1 ? url.length : end);
    let data;
    if (url.indexOf("https://youtu.be/") !== -1) {
        let ytbUrl = "https://youtu.be/";
        hostUrl = "https://www.youtube.com/watch?v";
        id = url.slice(ytbUrl.length, url.length);
    }
    switch (hostUrl) {
        case "https://www.youtube.com/playlist?list":
            data = { type: "playlist", id }
            break;
        case "https://www.youtube.com/watch?v":
            data = { type: "video", id }
            break;
        default:
            data = { type: "error" }
            break;
    }
    cb(data);
}

module.exports = { splitUrlYoutube }