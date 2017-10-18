const assert = require('chai').assert
const path = require('path')

/******************** Configs *******************/
const demoDataFolder = path.resolve('./test/demodata/directorySearchRoot')
const MEDIA_EXTENSIONS = require('../configs/Extensions').media

/******************** To be tested *******************/
const search = require('../src/utils/localSeach')

/******************** Tests *******************/
const testListFiles = () => describe('# .listAllFiles()', () => {
    it('should list all sub dir files', () => {
        const files = search.listAllFiles(demoDataFolder);
        ['common/00.txt', 'common/01.txt', 'common2/01.txt'].map(e => path.join(demoDataFolder, e))
            .forEach(fullPath => assert.equal(files.includes(fullPath), true))
    })
})

const listMediaFiles = () => describe('# .listMediaFiles()', () => {
    const medias = search.listMediaFiles(demoDataFolder)

    it('should contain only media files', () => {
        assert.isAbove(medias.length, 0)
        medias.forEach(file => {
            if (!MEDIA_EXTENSIONS.includes(path.extname(file))) {
                assert.fail()
            }
        })
    })
});

/******************** Summary *******************/
describe('>>> /src/localSearch.js', () => {
    testListFiles()
    listMediaFiles()
})
