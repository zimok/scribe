'use strict';
var escape = require('lodash-node/modern/utilities/escape');

  module.exports = function () {
    return function (scribe) {
      scribe.registerPlainTextFormatter(escape);
    };
  };


