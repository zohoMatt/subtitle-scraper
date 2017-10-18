const assert = require('chai').assert
const commonUtils = require('../lib/common')
const parseJsonFile = commonUtils.parseJsonFile
const objEqual = commonUtils.objEqual

/******************** To be tested *******************/
const fullNameParser = require('../src/utils/basename').fullNameParser

/******************** Tests *******************/
const nameExtractor = () => describe('# .nameExtractor()', () => {
    const seriesNameStd = parseJsonFile('./test/demoData/nameLib/series.json').entries
    it('should extract name properly', () => {
        const compares = seriesNameStd.map(prop('fullName'))
            .map(fullNameParser)
            .map((e, n) => objEqual(dissoc('fullName', seriesNameStd[n]), e))

        assert.equal(all(identity, compares), true)
    })
})

/******************** Summary *******************/
describe('>>> basename.js', () => {
    nameExtractor()
})
