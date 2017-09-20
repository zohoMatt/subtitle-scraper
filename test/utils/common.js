const assert = require('chai').assert

/******************** To be tested *******************/
const objEqual = require('../../utils/common').objEqual

/******************** Tests *******************/
const testObjEqual = () => describe('# .objEqual()', () => {
    it('should find two objects equal', () => {
        const just = objEqual({ a: 1, b: 2, c: 3 }, { b: 2, a: 1, c: 3 })
        assert.equal(just, true)
    })

    it('should find two objects do not equal', () => {
        const just = objEqual({ a: 1, b: 2, c: 3 }, { d: 1, b: 2, a: 1, c: 3 })
        assert.equal(just, false)
    })

    it('should find two objects do not equal', () => {
        const just = objEqual({ a: 1, b: 2, c: 3 }, { b: 3, a: 1, c: 3 })
        assert.equal(just, false)
    })
})

/******************** Summary *******************/
describe('>>> common.js', () => {
    testObjEqual()
})
