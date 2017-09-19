const rules = require('../configs/NamingRules')

/******************** Helpers level 0 *******************/




/******************** Helpers level 1 *******************/


/******************** Features *******************/
// String -> { k: v }
const nameExtractor = fullName =>
    Object.entries(rules)
        .map(pair => {
            // { k: [v] } -> { k: m }
            const value = pair[1].reduce((res, now) => {
                if (res !== null) return res
                const found = fullName.match(new RegExp(now, 'i'))
                return found === null ? null : found[0]
            }, null)
            return { [pair[0]]: value }
        }).reduce((obj, elem) => {
            // [{ k: v }] -> { k: v }
            return { ...obj, ...elem }
        }, {})


/******************** Exports *******************/
exports.nameExtractor = nameExtractor
