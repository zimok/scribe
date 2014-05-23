'use strict';


  function containsChild(node, elementType) {
    // FIXME: do we need to recurse further down?
    for (var n = node.firstChild; n; n = n.nextSibling) {
      if (n.tagName === elementType) {
        return true;
      }
    }

    return false;
  }

  function traverse(parentNode) {
    var treeWalker = document.createTreeWalker(parentNode, NodeFilter.SHOW_ELEMENT);
    var node = treeWalker.firstChild();

    while (node) {
      // Find any block-level container that contains neither text nor a <br>
      if ((node.nodeName === 'P' || node.nodeName === 'LI') &&
          (node.textContent === '') &&
          (! containsChild(node, 'BR'))) {
        node.appendChild(document.createElement('br'));
      }
      node = treeWalker.nextSibling();
    }
  }

  module.exports = function () {
    return function (scribe) {

      scribe.registerHTMLFormatter('normalize', function (html) {
        var bin = document.createElement('div');
        bin.innerHTML = html;

        traverse(bin);

        return bin.innerHTML;
      });

    };
  };


