# What Does it do?

Grabs torrent and all movie info in a simple function! Useful for creating a Streaming Website!

# Instalation 

`npm i easytorrents --save`

[Get a moviedb api key](https://www.themoviedb.org/documentation/api)

# Example Usage

```
const easyTorrents = require('easytorrents');

async function getMovie() {
    const movieData = await easyTorrents.search(moviedb_api_key, 'matrix', '1080p');
    console.log(movieData);
}

getMovie();
```
# Sample Response:
```
{
  movieData: {
    adult: false,
    backdrop_path: '/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg',
    genre_ids: [ 878, 28, 12 ],
    id: 624860,
    original_language: 'en',
    original_title: 'The Matrix Resurrections',
    overview: "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    popularity: 3005.201,
    poster_path: '/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
    release_date: '2021-12-16',
    title: 'The Matrix Resurrections',
    video: false,
    vote_average: 6.9,
    vote_count: 2381
  },
  movieDataExtended: {
    adult: false,
    backdrop_path: '/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg',
    belongs_to_collection: {
      id: 2344,
      name: 'The Matrix Collection',
      poster_path: '/bV9qTVHTVf0gkW0j7p7M0ILD4pG.jpg',
      backdrop_path: '/bRm2DEgUiYciDw3myHuYFInD7la.jpg'
    },
    budget: 190000000,
    genres: [ [Object], [Object], [Object] ],
    homepage: 'https://www.whatisthematrix.com',
    id: 624860,
    imdb_id: 'tt10838180',
    original_language: 'en',
    original_title: 'The Matrix Resurrections',
    overview: "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    popularity: 3005.201,
    poster_path: '/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
    production_companies: [ [Object], [Object], [Object] ],
    production_countries: [ [Object] ],
    release_date: '2021-12-16',
    revenue: 148000000,
    runtime: 148,
    spoken_languages: [ [Object] ],
    status: 'Released',
    tagline: 'Return to the source.',
    title: 'The Matrix Resurrections',
    video: false,
    vote_average: 6.9,
    vote_count: 2400
  },
  magnet_link: 'magnet:?xt=urn:btih:CF109D8D0CFE46BFE7AC5378B587D27B71DD87A8&dn=The%20Matrix%20Resurrections%20(2021)%20%5B1080p%5D%20%5BWEBRip%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce',
  full_torrent: {
    provider: 'ThePirateBay',
    id: '55131929',
    title: 'The Matrix Resurrections (2021) [1080p] [WEBRip]',
    time: 'Wed, 22 Dec 2021 13:59:13 GMT',
    seeds: 4915,
    peers: 1406,
    size: '2.9 GB',
    magnet: 'magnet:?xt=urn:btih:CF109D8D0CFE46BFE7AC5378B587D27B71DD87A8&dn=The%20Matrix%20Resurrections%20(2021)%20%5B1080p%5D%20%5BWEBRip%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce',
    numFiles: 8,
    status: 'vip',
    category: '207',
    imdb: ''
  }
}
```

# Creator

@RaxoCoding
[Twitter](https://twitter.com/RaxoCoding)
[Youtube](https://www.youtube.com/channel/UCGxmNncs5ihjB-xk_9UUHyw)