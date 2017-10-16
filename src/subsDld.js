/******************** Typedefs *******************/
/**
 * @typedef {Object} DownloaderPlugin
 * @property init               {Function}
 * @property config             {Function} function (config: Object): DownloaderPlugin
 * @property download           {Function} function (info: NameObject): DownloadedPackage
 */

/**
 * @typedef {Object} DownloadedPackage
 * @property fileName           {String}
 * @property type               {String} RAR or ZIP
 */

/******************** Helpers level 0 *******************/

/******************** Features *******************/
/**
 * @function subtitleDownload
 * @description Download subtitle with configured plugin.
 *
 * @param nameObj               {NameObject}
 * @param configuredPlugin      {DownloaderPlugin}
 * @returns                     {DownloadedPackage}
 */
const subtitleDownload = (nameObj, configuredPlugin) => configuredPlugin.download(nameObj)

/******************** Exports *******************/
exports.subtitleDownload = curry(subtitleDownload)
