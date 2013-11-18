var test    = require('tape');
var DOMBars = require('dombars/runtime');

test('generate a template', function (t) {
  t.plan(1);

  var div = document.createElement('div');

  // Register a simple helper to demonstrate that it works.
  DOMBars.registerHelper('upper', function (string) {
    return string.toUpperCase();
  });

  // Require the template and append the DOM output.
  div.appendChild(require('./browser.hbs')({ string: 'test' }));

  t.equal(div.innerHTML, '<p>TEST</p>\n');
});
