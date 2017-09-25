const fs = require('fs-extra')
const path = require('path')
const JSZip = require('jszip')

const ARCHIVE_EXTENTIONS = require('../configs/Extensions').archive
const SUBTITLE_EXTENSIONS = require('../configs/Extensions').subtitle

const { isArchive, isSubtitle } = require('./localSeach')

const myTask = new JSZip()

/******************** Helper level 0 *******************/
const uncompressed = async (archivePath, destPath) => {
    const content = await myTask.loadAsync(fs.readFileSync(archivePath))
    console.log(content)
    return destPath;
}

// todo Unrar

/******************** Features *******************/
const packageToSubtitle = async (archivePath) => {
    if (isSubtitle(archivePath)) {
        return archivePath
    } else if (isArchive(archivePath)) {
        const newFolderPath = await uncompressed(archivePath, path.resolve(__dirname, 'temp'))
        return newFolderPath
    } else {
        throw new Error('[FILE TYPE ERROR] Trying to recognize what we download from the web. Unrecognized file type occurred, however')
    }
}

/******************** Exports *******************/
exports.packageToSubtitle = packageToSubtitle

