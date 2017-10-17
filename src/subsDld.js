/******************** Typedefs *******************/
/**
 * @typedef {Object} DownloaderPlugin
 * @property config             {Function} function (config: Object): DownloaderPlugin
 * @property download           {Function} function (info: NameObject): DownloadedPackage
 */

/**
 * @typedef {Object} Preferences
 * @property language           {String[]} The one at the front of array has priority.
 *                                         Now supported: :: chs, cht, eng, fre, gem, jpn, kor ::.
 *                                         Using `&` to connect, like :: chs&eng ::, etc. Only support 2 languages connected.
 * @property subFormat          {String[]} The one at the front of array has priority.
 *                                         Now supported: :: ass, srt ::.
 * @property zipFormat          {String[]} The one at the front of array has priority. Now supported: :: zip, rar ::
 */

/**
 * @typedef {Object} DownloadedPackage
 * @property fullPath           {String}
 * @property type               {String} RAR or ZIP
 */

/******************** Helpers level 0 *******************/

/******************** Features *******************/
/**
 * @function subtitleDownload
 * @description Download subtitle with configured plugin.
 *
 * @param plugin                {DownloaderPlugin}
 * @param preferences           {Preferences}
 * @param target                {NameObject}
 * @returns                     {DownloadedPackage}
 */
const subtitleDownload = (plugin, preferences, target) => plugin.config(preferences).download(target)

/******************** Exports *******************/
exports.subtitleDownload = curry(subtitleDownload)
