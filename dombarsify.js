var through = require('through');
var DOMBars = require('dombars');

/**
 * The main compilation function returns either a proxy through stream or
 * augments the file into a precompiled template based on the file extension.
 *
 * @param  {String} file
 * @return {Stream}
 */
var DOMBarsify = module.exports = function (file) {
  if (!DOMBarsify.extensions[file.split('.').pop()]) {
    return through();
  }

  var buffer = '';

  return through(function (chunk) {
    buffer += chunk;
  }, function () {
    this.queue([
      '// DOMBarsify compiled template',
      'var DOMBars = require("dombars/runtime");',
      'module.exports = DOMBars.template(' + DOMBars.precompile(buffer) + ');'
    ].join('\n'));
    this.queue(null);
  });
};

/**
 * Allow the extensions object to be manipulated from the outside.
 *
 * @type {Object}
 */
DOMBarsify.extensions = {
  dom:        true,
  dombars:    true,
  hbs:        true,
  handlebars: true
};
