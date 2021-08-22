const lodash = require('lodash');

exports.merge = function merge(a, b) {
/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
  // eslint-disable-next-line no-use-before-define
  return lodash.mergeWith(a, b, deep);
};

/**
 *
 * @param a
 * @param b
 * @returns {Array.<T>|string}
 */

// eslint-disable-next-line consistent-return
const deep = (a, b) => {
  if (lodash.isArray(a) && lodash.isArray(b)) {
    return a.concat(b);
  }
};
