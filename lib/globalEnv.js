/**======================================================**/
/**               Map ramda.js globally                  **/
/**======================================================**/
const ramda = require('ramda')
const mapRamdaGlobal = () => ramda.mapObjIndexed((v, k) => global[k] = v, ramda)
exports.mapRamdaGlobal = mapRamdaGlobal;

