const assert = require('chai').assert

/******************** To be tested *******************/
const mapRamdaGlobal = require('../../utils/globalEnv').mapRamdaGlobal

/******************** Tests *******************/
const testMapRamda = () => describe('# mapRamdaGlobal()', () => {
    it('should find method in the env object', () => {
        mapRamdaGlobal()
        // Check placeholder
        assert.isObject(__)
        // Check toPairs
        assert.isFunction(toPairs)
    })
})

/******************** Summary *******************/
describe('>>> /utils/globalEnv.js', () => {
    testMapRamda()
})
