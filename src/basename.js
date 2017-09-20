const rules = require('../configs/NamingRules')

/******************** Helpers level 0 *******************/




/******************** Helpers level 1 *******************/
// String -> String
const nameModifier = raw => raw.split('.').slice(0, -1).join(' ')

// String -> Number
const numberExtractor = raw => raw === null ? null : Number(raw.match(/\d+/g)[0])

/******************** Features *******************/
// String -> { k: v }
const nameExtractor = fullName =>
    Object.entries(rules)
        // { k: [v] } -> { k: m }
        .map(pair => {
            const value = pair[1].reduce((res, now) => {
                if (res !== null) return res
                const found = fullName.match(new RegExp(now, 'i'))
                return found === null ? null : found[0]
            }, null)
            return { [pair[0]]: value }
        })
        // [{ k: v }] -> { k: v }
        .reduce((obj, elem) => {
            return { ...obj, ...elem }
        }, {})

// { k: v } -> { k: v' }
const formatter = info => {
    return {
        ...info,
        name: nameModifier(info.name),
        season: numberExtractor(info.season),
        episode: numberExtractor(info.episode),
        year: numberExtractor(info.year)
    }
}

/******************** Exports *******************/
exports.nameExtractor = nameExtractor
exports.formatter = formatter
