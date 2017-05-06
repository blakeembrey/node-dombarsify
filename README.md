# dombarsify

[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/node-dombarsify.svg)](https://greenkeeper.io/)

![This plugin is deprecated](http://messages.hellobits.com/warning.svg?message=This%20plugin%20is%20deprecated!)

[DOMBars](https://github.com/blakeembrey/dombars) pre-compilation plugin for [Browserify](https://github.com/substack/node-browserify). Compiles DOMBars/Handlebars templates into plain JavaScript. All compiled templates include only the DOMBars runtime and the precompiled template, so they are several factors faster and lightweight than including and parsing the original template.

## Usage

Install dombarsify locally to your project.

```sh
npm install dombarsify
```

DOMBars will be installed automatically as a [peer dependency](http://blog.nodejs.org/2013/02/07/peer-dependencies/), which allows for finer grain control over versioning. You can now use it as a transform with your module.

```sh
browserify -t dombarsify main.js -o bundle.js
```

To require a template within `main.js`, you can simply require the file itself.

```js
var template = require('./template.hbs');
document.body.appendChild(template({ user: 'blakeembrey' }));
```

The template file, be default, can use `.hbs`, `.handlebars`, `.dom` or `.dombars` extensions. The template itself is just regular text.

```html
<p>Welcome back, {{user}}</p>
```

## Programmatic Usage

### Custom extensions

Using another unhandled extension? Just add it to the `extensions` object on the main function.

```js
var dombarsify = require('dombarsify');

dombarsify.extensions.html = true;
```

### Helpers

To register a custom helper function, just require the DOMBars runtime and use `registerHelper` as your normally would.

```js
var dombars = require('dombars/runtime');

dombars.registerHelper('upper', function (string) {
  return string.toUpperCase();
});
```

### Partials

Partials can be included by passing a precompiled template to the `registerPartial` function.

```js
var dombars = require('dombars/runtime');

dombars.registerPartial('button', require('./button.hbs'));
```

## License

MIT
