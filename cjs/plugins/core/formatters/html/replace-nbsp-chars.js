'use strict';


  module.exports = function () {
    return function (scribe) {
      var nbspChar = '&nbsp;|\xA0';
      var nbspCharRegExp = new RegExp(nbspChar, 'g');

      // TODO: should we be doing this on paste?
      scribe.registerHTMLFormatter('normalize', function (html) {
        return html.replace(nbspCharRegExp, ' ');
      });
    };
  };


