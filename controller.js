const axios = require('axios');

// Torrent Shit Hacker go BRRRRR
const TorrentSearchApi = require('./customModules/torrent-search-api');


async function search(apiKey, title, quality) {
    var type = 'movie';
    if (apiKey == undefined || title == undefined || language == undefined || quality == undefined || type == undefined) {
        return ({ error: "Parameters Missing" });
    }

    if (quality == undefined) {
        quality = "";
    }

    if (type == 'movie') {
        var movieData = null;
        // send a POST request
        await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=' + language + '&query=' + title + '&page=1&include_adult=false',
            })
            .then((response) => {
                movieData = response.data.results[0];
            }, (error) => {
                console.log(error);
            });
        if (movieData == undefined) {
            return ({ error: "Movie not found" });
        }
        var movieDataExtended = null;
        await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/movie/' + movieData.id + '?api_key=' + apiKey + '&language=' + language,
            })
            .then((response) => {
                movieDataExtended = response.data;
            }, (error) => {
                console.log(error);
            });


        var movieTitle = movieData.title;
        TorrentSearchApi.disableAllProviders();
        TorrentSearchApi.enableProvider('ThePirateBay');
        const torrents = await TorrentSearchApi.search(movieTitle.replace("'", "").replace("#", "").replace(";", "").replace(":", "") + " " + movieData.release_date.substring(0, 4) + " " + quality, 'Video', 5);

        if (torrents[0].title == 'No results returned') {
            return ({ error: "No Results for torrent." });
        } else {
            var magnet = await TorrentSearchApi.getMagnet(torrents[0]);
            return ({ movieData: movieData, movieDataExtended: movieDataExtended, magnet_link: magnet, full_torrent: torrents[0] });
        }
    } else {
        return ({ error: "Only Movies are Supported Currently" });
    }

}

module.exports.search = search;