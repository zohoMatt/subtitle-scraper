const fs = require('fs-extra')
const path = require('path')
const JSZip = require('jszip')

const { isArchive, isSubtitle } = require('./localSeach')

const myTask = new JSZip()

/******************** Helper level 0 *******************/
const uncompressed = async (archivePath, destPath) => {
    const catalogue = await myTask.loadAsync(fs.readFileSync(archivePath))
    console.log(catalogue)
    return destPath;
}

// todo Unrar

/******************** Features *******************/
const packageToSubtitle = async (archivePath) => {
    if (isSubtitle(archivePath)) {
        return archivePath
    } else if (isArchive(archivePath)) {
        return uncompressed(archivePath, path.resolve(__dirname, 'temp'))
    } else {
        throw new Error('[FILE TYPE ERROR] Trying to recognize what we download from the web. Unrecognized file type occurred, however')
    }
}

/******************** Exports *******************/
exports.packageToSubtitle = packageToSubtitle

