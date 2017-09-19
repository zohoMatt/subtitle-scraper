const fs = require('fs-extra')
const path = require('path')

const MEDIA_EXTENSIONS = require('../configs/MediaExtensions').extname

/******************** Helpers level 0 *******************/
let isDir = fullPath => fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()
let readFullPath = dirPath => fs.readdirSync(dirPath).map(f => path.join(dirPath, f))
let isMedia = filePath => MEDIA_EXTENSIONS.includes(path.extname(filePath).slice(1))

isDir = curry(isDir)
readFullPath = curry(readFullPath)
isMedia = curry(isMedia)

/******************** Features *******************/
let listAllFiles = start => {
    if (!isDir(start)) return start
    return chain(listAllFiles, readFullPath(start))
}

let listMediaFiles = compose(filter(isMedia), listAllFiles)

/******************** Exports *******************/
exports.listAllFiles = curry(listAllFiles)
exports.listMediaFiles = curry(listMediaFiles)
