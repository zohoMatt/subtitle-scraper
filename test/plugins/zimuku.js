const assert = require('chai').assert

/******************** To be tested *******************/
const zimuku = require('../../src/plugins/zimuku').zimukuPlugin


/******************** Tests *******************/
const testZimuku = () => describe('# Basic tests', () => {
    it('should print info', async () => {
        await zimuku.download()
    }).timeout(30000)
})

/******************** Summary *******************/
describe('>>> /src/plugins/zimuku', () => {
    testZimuku()
})
