const fs = require('fs-extra')

/**======================================================**/
/**                      Console                         **/
/**======================================================**/
// a -> a
const logger = a => {
    console.log(a);
    return a;
}

/**======================================================**/
/**                      Objects                         **/
/**======================================================**/
// a -> b -> Boolean
const objEqual = (a, b) => compose(
    all(identity),
    map(eqProps(__, a, b))
)(
    keys({ ...a, ...b })
)

/**======================================================**/
/**                    JSON reader                       **/
/**======================================================**/
// String -> Object
const parseJsonFile = filePath => {
    const jsonStr = fs.readFileSync(filePath)
    return JSON.parse(jsonStr)
}


/******************** Exports *******************/
exports.objEqual = objEqual
exports.parseJsonFile = parseJsonFile
