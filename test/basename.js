const assert = require('chai').assert

/******************** To be tested *******************/
const textMod = require('../src/basename')

/******************** Tests *******************/
const nameExtractor = () => describe('# .nameExtractor()', () => {
    const NAME = 'Prison.Break.1994.S02E01.Manhunt.HR.HDTV.AC3.5.1.XviD-DiMENSION'
    it('should extract name properly', () => {
        const res = textMod.nameExtractor(NAME)
        console.log(res)
    })
})

/******************** Summary *******************/
describe('>>> basename.js', () => {
    nameExtractor()
})
