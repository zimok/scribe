'use strict';


  module.exports = function () {
    return function (scribe) {
      var superscriptCommand = new scribe.api.Command('superscript');

      scribe.commands.superscript = superscriptCommand;
    };
  };


