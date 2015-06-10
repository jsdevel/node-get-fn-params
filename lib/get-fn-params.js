'use strict';

var PARAM_REGEX = /[^(]*\(([^)]*)\)[\s\S]*/;

module.exports = function(string) {
  if (typeof string === 'function') {
    string = string.toString();
  }

  if (typeof string !== 'string') {
    return [];
  }

  var params = string
         .replace(PARAM_REGEX, '$1')
         .trim();

  if (!params) {
    return [];
  }

  return params.split(/\s*,\s*/);
};
