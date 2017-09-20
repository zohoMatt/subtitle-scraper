module.exports = {
    name: [
        /^[^\d]+/
    ],
    season: [
        /(s|season).?(\d+)/
    ],
    episode: [
        /(e|ep|episode).?(\d+)/
    ],
    year: [
        /(19|20)\d{2}/
    ],
    resolution: [
        /[1-9]\d{2,3}[x*][1-9]\d{2,3}/,
        /(108|72)0[ip]/,
    ],
    audioEncoding: [
        /aac/,
        /ac[0-3](\.\d+)*/,
        /mp3/,
        /dd[2345]\.1/,
        /dts/
    ],
    videoEncoding: [
        /h[.]?264/,
        /h[.]?265/,
        /xvid/,
        /x264/
    ],
    signalSource: [
        /blu[-e]ray/,
        /bdrip/,
        /web[-]?dl/,
        /webrip/,
        /hdtv/,
        /hdtvrip/,
        /dvdrip/
    ],
    author: [
        /[^-]+$/
    ]
}
