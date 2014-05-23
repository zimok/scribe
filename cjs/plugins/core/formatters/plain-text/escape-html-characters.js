'use strict';
var escape = require('lodash-amd/modern/utilities/escape');

  module.exports = function () {
    return function (scribe) {
      scribe.registerPlainTextFormatter(escape);
    };
  };


