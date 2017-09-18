const fs = require('fs-extra')
const path = require('path')

const MEDIA_EXTENSIONS = require('../configs/MediaExtensions').extname

/******************** Helpers level 0 *******************/
let isDir = fullPath => fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()
let readFullPath = dirPath => fs.readdirSync(dirPath).map(f => path.join(dirPath, f))

isDir = curry(isDir)

/******************** Helpers level 1 *******************/
let listRecursively = start => {
    if (!isDir(start)) return start
    return chain(listRecursively, readFullPath(start))
}

listRecursively = curry(listRecursively)
/******************** Features *******************/
let listAllFiles = listRecursively

let isMedia = filePath => MEDIA_EXTENSIONS.includes(path.extname(filePath).slice(1))
isMedia = curry(isMedia)

let listMediaFiles = compose(filter(isMedia), listAllFiles)

/******************** Exports *******************/
exports.listAllFiles = listAllFiles
exports.listMediaFiles = listMediaFiles
