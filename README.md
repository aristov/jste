# htool

[![NPM Version](https://img.shields.io/npm/v/htool.svg)](https://www.npmjs.com/package/htool)
[![Node.js CI](https://github.com/aristov/htool/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/htool/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/htool/badge.svg?branch=master)](https://coveralls.io/github/aristov/htool?branch=master)
[![NPM](https://img.shields.io/npm/l/htool)](https://raw.githubusercontent.com/aristov/htool/master/LICENSE)

HTool is an HTML builder.

This is a simple cross-platform HTML generation library.
It is a handy tool for creating templates.

## Features

- Convenient JS-compatible syntax
- Cross-platform, works both in NodeJS and in the browser
- Support for ES2015 named imports
- Small footprint, 2KB after gzip

## Installation

```shell
npm install htool
```

## Usage

ES2015

```js
import { div } from 'htool'
```

CommonJS

```js
const { div } = require('htool')
```

Browser

```html
<script src="https://unpkg.com/htool@latest/dist/htool.js"></script>
<script>
  const { div } = htool
</script>
```

## Example

HTool can be used both in NodeJS and in the browser:

```js
import { form, label, input, button } from 'htool'

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

The `result` variable is an HTML string with the appropriate markup:

```html
<form action="//google.com/search" target="_blank">
    <label>
        Search 
        <input type="search" name="q">
    </label>
    <button>Find</button>
</form>
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/htool/master/LICENSE)
