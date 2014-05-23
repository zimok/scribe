define([
  'lodash-node/modern/utilities/escape'
], function (
  escape
) {

  'use strict';

  return function () {
    return function (scribe) {
      scribe.registerPlainTextFormatter(escape);
    };
  };

});
