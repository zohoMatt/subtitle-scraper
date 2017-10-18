const assert = require('chai').assert
const path = require('path')

/******************** To be tested *******************/
const packageToSubtitle = require('../src/utils/unzipSubs').packageToSubtitle

/******************** Tests *******************/
const testPackage2Subtitle = () => describe('# .packageToSubtitle()', () => {
    it('should uncompress .zip files to temp directory', async () => {
        // todo Not yet
        await packageToSubtitle(path.resolve('./test/demoData/subtitles/The.Last.Ship.S04E07.720p.HDTV.X264-DIMENSION.zip'))
    })

    it('should uncompress .rar files to temp directory', async () => {

    })
})

/******************** Summary *******************/
describe.skip('>>> ./src/unzipSubs.js', () => {
    testPackage2Subtitle()
})
