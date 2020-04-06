let axios = require('axios');
let API_KEY = process.env.REACT_APP_API_KEY;

function apiYoutubePlayList(playlistId, maxResults, cb) {
    axios({
        method: 'GET',
        url: "https://www.googleapis.com/youtube/v3/playlistItems",
        params: {
            key: API_KEY,
            part: "contentDetails",
            playlistId, maxResults
        }
    })
        .then(function (response) {
            cb(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function apiYoutubeVideo(id, cb) {
    return {
        method: 'GET',
        url: "https://www.googleapis.com/youtube/v3/videos",
        params: {
            key: API_KEY,
            part: "snippet", id
        }
    }
}

module.exports = { apiYoutubePlayList, apiYoutubeVideo }