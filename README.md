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
- Cross-platform, works both in NodeJS and in the browser
- Support for ES2015 named imports
- Small footprint, 2KB after gzip

## Installation

```shell
npm install jste
```

## Usage

ES2015

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

JSTE can be used both in NodeJS and in the browser:

```js
import { form, label, input, button } from 'jste'

const result = form({
  action : 'https://google.com/search',
  target : '_blank',
  children : [
    label([
      'Search ',
      input({ type : 'search', name : 'q' }),
    ]),
    button('Find'),
  ],
})

// browser
document.body.innerHTML = result

// nodejs
app.get('/form', (req, res) => res.send(result))
```

`result.toString()` returns an HTML string with the appropriate markup:

```html
<form action="//google.com/search" target="_blank">
  <label>
    Search
    <input type="search" name="q">
  </label>
  <button>Find</button>
</form>
```

## Documentation

* [Using with Express](https://github.com/aristov/jste/wiki/Using-with-Express)

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/jste/master/LICENSE)
