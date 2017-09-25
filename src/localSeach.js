const fs = require('fs-extra')
const path = require('path')

const ARCHIVE_EXTENSIONS = require('../configs/Extensions').archive
const MEDIA_EXTENSIONS = require('../configs/Extensions').media
const SUBTITLE_EXTENSIONS = require('../configs/Extensions').subtitle

/******************** Helpers level 0 *******************/
let isDir = fullPath => fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()
let readFullPath = dirPath => fs.readdirSync(dirPath).map(f => path.join(dirPath, f))
let isMedia = filePath => MEDIA_EXTENSIONS.includes(path.extname(filePath))
let isSubtitle = file => SUBTITLE_EXTENSIONS.includes(path.extname(file))
let isArchive = file => ARCHIVE_EXTENSIONS.includes(path.extname(file))

// Currying
isDir = curry(isDir)
readFullPath = curry(readFullPath)
isMedia = curry(isMedia)
isSubtitle = curry(isSubtitle)
isArchive = curry(isArchive)

/******************** Features *******************/
let listAllFiles = start => {
    if (!isDir(start)) return start
    return chain(listAllFiles, readFullPath(start))
}

let listMediaFiles = compose(filter(isMedia), listAllFiles)

let listSubtitleFiles = compose(filter(isSubtitle), listAllFiles)

/******************** Exports *******************/
exports.isDir = isDir
exports.readFullPath = readFullPath
exports.isMedia = isMedia
exports.isSubtitle = isSubtitle
exports.isArchive = isArchive

exports.listAllFiles = curry(listAllFiles)
exports.listMediaFiles = curry(listMediaFiles)
exports.listSubtitleFiles = curry(listSubtitleFiles)
