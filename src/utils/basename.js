const rules = require('../../configs/NamingRules')

/******************** Typedefs *******************/
/**
 * @typedef {Object} NameObject
 * @property name               {String}
 * @property season             {Number}
 * @property episode            {Number}
 * @property year               {Number}
 * @property resolution         {String}
 * @property audioEncoding      {String}
 * @property videoEncoding      {String}
 * @property signalSource       {String}
 * @property author             {String}
 */

/******************** Helpers level 0 *******************/
/**
 * @function nameModifier
 * @description Make ' ' as the replacement of delimiter '.' in a string.
 *
 * @param raw {String}
 * @returns {String}
 * @signature String -> String
 */
const nameModifier = raw => raw.split('.').slice(0, -1).join(' ')

/**
 * @function numberExtractor
 * @description Get continuous digits in a string.
 *
 * @param raw
 * @returns {String}
 * @signature String -> Number
 */
const numberExtractor = raw => raw === null ? null : Number(raw.match(/\d+/g)[0])

/******************** Features *******************/
/**
 * @function nameExtractor
 * @description Extract the string into a raw name object. Not formatted yet.
 *
 * @param fullName
 * @returns {NameObject}
 * @signature  String -> { k: v }
 */
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

/**
 * @function formatter
 * @description Modify the name, season, episode & year entry.
 *
 * @param info {NameObject}
 * @returns {NameObject}
 * { k: v } -> { k: v' }
 */
const formatter = info => {
    return {
        ...info,
        name: nameModifier(info.name),
        season: numberExtractor(info.season),
        episode: numberExtractor(info.episode),
        year: numberExtractor(info.year)
    }
}

const fullNameParser = compose(formatter, nameExtractor)

/******************** Exports *******************/
exports.nameExtractor = nameExtractor
exports.formatter = formatter
exports.fullNameParser = fullNameParser
