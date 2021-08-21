const axios = require('axios');
const apiKey = "e46eabe7402731804b6d3bf9858dddcc";

// Torrent Shit Hacker go BRRRRR
const TorrentSearchApi = require('./customModules/torrent-search-api');


exports.search = async function(req, res) {

    var title = req.query.name;
    var language = req.query.language;
    var quality = req.query.quality;
    if (quality == undefined) {
        quality = "";
    }

    if (req.query.type == 'movie') {
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
            res.send({ error: "Movie not found" });
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
        if (language == 'fr') {
            TorrentSearchApi.enableProvider('Torrent9');
            // Search (Movie Title + Release Date) in 'Movies' category and limit to 1 results
            const torrents = await TorrentSearchApi.search(movieTitle + " " + movieData.release_date.substring(0, 4) + " 1080p", 'Movies', 1);

            var timeSinceStart = 0;
            (function loop() {
                setTimeout(async function() {
                    if (timeSinceStart >= 20000) {
                        res.send({ error: "Timed Out after 20 Seconds" });
                    } else if (torrents[0] != undefined) {
                        var magnet = await TorrentSearchApi.getMagnet(torrents[0]);
                        res.send({ movieData: movieData, movieDataExtended: movieDataExtended, magnet_link: magnet, full_torrent: torrents[0] });
                    } else {
                        timeSinceStart += 500;
                        loop()
                    }
                }, 500); //500 = 500ms = 0.5s
            }());
        } else {
            TorrentSearchApi.enableProvider('ThePirateBay');
            const torrents = await TorrentSearchApi.search(movieTitle.replace("'", "").replace("#", "").replace(";", "").replace(":", "") + " " + movieData.release_date.substring(0, 4) + " " + quality, 'Video', 5);
            var timeSinceStart = 0;
            var currentTorrentCount = 0;
            (function loop() {
                setTimeout(async function() {
                    if (timeSinceStart >= 20000) {
                        res.send({ error: "Timed Out after 20 Seconds" });
                    } else if (currentTorrentCount >= torrents.length) {
                        res.send({ error: "Could not find Torrent for this Movie" });
                    } else if (torrents[currentTorrentCount] != undefined) {
                        console.log(torrents[currentTorrentCount].title);
                        if (torrents[currentTorrentCount].title != "No results returned") {
                            var magnet = await TorrentSearchApi.getMagnet(torrents[currentTorrentCount]);
                            res.send({ movieData: movieData, movieDataExtended: movieDataExtended, magnet_link: magnet, full_torrent: torrents[currentTorrentCount] });
                        } else {
                            currentTorrentCount += 1;
                            timeSinceStart += 500;
                            loop()
                        }
                    } else {
                        timeSinceStart += 500;
                        loop()
                    }
                }, 500); //500 = 500ms = 0.5s
            }());

        }
    } else {
        res.send({ error: "Only Movies are Supported Currently" });
    }

}