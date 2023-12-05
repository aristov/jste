# jste

[![NPM Version](https://img.shields.io/npm/v/jste.svg)](https://www.npmjs.com/package/jste)
[![Node.js CI](https://github.com/aristov/jste/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/jste/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/jste/badge.svg?branch=master)](https://coveralls.io/github/aristov/jste?branch=master)
[![NPM](https://img.shields.io/npm/l/jste)](https://raw.githubusercontent.com/aristov/jste/master/LICENSE)

JSTE is a JavaScript template engine.

This is a simple cross-platform HTML generation library.
It is a convenient and fast tool for creating templates.

## Features

- High performance
- Convenient JS-compatible syntax
- Secure, escaping strings by default
- Cross-platform, works both in NodeJS and in the browser
- Support for ESM named imports
- Small footprint, 4KB after gzip
- Compatible with Express

## Installation

```shell
npm install jste
```

## Usage

ESM

```js
import { div } from 'jste'
```

CommonJS

```js
const { div } = require('jste')
```

Browser

```html
<script src="https://unpkg.com/jste@latest/dist/jste.js"></script>
<script>
  const { div } = jste
</script>
```

## Example

JSTE can be used both in NodeJS and in the browser.
Consider an example template that generating simple markup for a single page application:

```js
import { html, head, body, meta, title, link, script } from 'jste'

const example = params => html({
  doctype : true,
  lang : params.lang,
  children : [
    head([
      meta({ charset : 'utf-8' }),
      title(params.title),
      link({
        rel : 'stylesheet',
        href : '/bundle.css',
      })
    ]),
    body(
      script({ src : '/bundle.js' }),
    ),
  ],
})

const result = example({
  lang : 'en',
  title : 'Hello JSTE!',
})
const html = result.toString()
```

In this example, the constant `html` is an HTML string with the appropriate markup (line breaks added for readability):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello JSTE!</title>
    <link rel="stylesheet" href="/bundle.css">
  </head>
  <body>
    <script src="/bundle.js"></script>
  </body>
</html>
```

## Documentation

* [Use with Express](https://github.com/aristov/jste/wiki/Using-with-Express)

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/jste/master/LICENSE)
