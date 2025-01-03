const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDom = domains.map(value => value.split('.').reverse())
  let objDom = {}

  for (let i = 0; i < newDom.length; i++) {
    let key = ''
    for (let j = 0; j < newDom[i].length; j++) {
      key = `${key}.${newDom[i][j]}`
      if (!objDom[key]) {
        objDom[key] = 1
      } else {
        objDom[key] = objDom[key] + 1
      }
    }
  }


   return  objDom;
}

module.exports = {
  getDNSStats
};
