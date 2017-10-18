/**
 * Plugin for subtitle-scraper.
 *
 * @name zimuku
 * @author MattZo
 * @version 0.1.0
 * @description
 * This plugin is for scraping subtitles at zimuku.net. To make it simplicity, it only supports `Integrated searching`
 * results, instead of `subtitles of old shooter.cn`.
 */

const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const url = require('url')

/******************** Basic info *******************/
const BASE_URL = 'http://www.zimuku.net'
const SEARCH_API = '/search'

/******************** Helpers level 0 *******************/
// Step 1: Get search results
const getSearchResults = async (keyword) => {
    const response = await axios({
        method: 'get',
        baseURL: BASE_URL,
        url: SEARCH_API,
        params: {
            ad: 1,
            q: keyword
        },
        headers: {
            // betterdo Header of request
        }
    })
    const $ = cheerio.load(response.data, {
        // betterdo cheerio options
    })

    const optionListUrl = $('.tt.clearfix a[href]').map((i, e) => $(e).attr('href')).get()
    console.log(optionListUrl)
    return optionListUrl
}

// Step 2: Get package downloading URL
// todo Return an object with details
const getDetailUrl = async (optionListUrl) => {
    const response = await axios({
        method: 'get',
        baseURL: BASE_URL,
        url: optionListUrl,
        headers: {
            // betterdo Header of request
        }
    })

    const $ = cheerio.load(response.data, {
        // betterdo cheerio options
    })
    const downloadPageUrl = $('td.first>a[href]').map((i, e) => $(e).attr('href')).get()
    console.log(downloadPageUrl)
    return downloadPageUrl
}

// Step 3: Analyze results

// Step 3.1: Degraded searching if necessary

// Step 3.2: No relevant results

// Step 4: Send request and download file
const downloadPackage = (detailUrl, savedPath) => new Promise((resolve, reject) => {
    let $ = null;
    axios({
        method: 'get',
        baseURL: BASE_URL,
        url: detailUrl,
        headers: {
            // betterdo Header of request
        }
    }).then(response => {
        $ = cheerio.load(response.data, {
            // betterdo cheerio options
        })
        const downloadUrl = $('#down1').attr('href')
        console.log(downloadUrl)
        // Downloading
        return axios({
            method: 'get',
            baseURL: BASE_URL,
            url: downloadUrl,
            responseType: 'stream'
        })
    }).then(chunk => {
        console.log(chunk)
        chunk.data
            .pipe(fs.createWriteStream(savedPath))
            .on('finish', () => resolve())
    }).catch(err => {
        reject(err)
    })

})

// Step 5: Wrap the local downloaded file path, other info into one DownloadedPackage object.


/******************** Interfaces *******************/
const zimukuPlugin = {
    config(preferences) {

    },

    async download(nameObj) {
        const optionListUrls = await getSearchResults('spiderman')
        const detailUrls = await getDetailUrl(optionListUrls[0])
        await downloadPackage(detailUrls[0], './data/example.txt')
    }
}


/******************** Exports *******************/
exports.zimukuPlugin = zimukuPlugin
