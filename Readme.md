# Trimmer

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Trim any characters from either side of a string.

## Installation

```
npm install trimmer --save
```

## API

```javascript
var trim = require('trimmer');
```

* `trim(string [, characters])`
* `trim.left(string [, characters])`
* `trim.right(string [, characters])`

Please note: `characters` can be one of either an string, array or function.

```javascript
trim('  test  ') // 'test'
trim.left('  test  ') // 'test  '
trim.right('  test  ') // '  test'

trim('test', 't') // 'es'
trim('testing', 'ing') // 'test'
trim.left('test', 't') // 'est'
trim.right('test', 't') // 'tes'
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/trimmer.svg?style=flat
[npm-url]: https://npmjs.org/package/trimmer
[travis-image]: https://img.shields.io/travis/blakeembrey/node-trimmer.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/node-trimmer
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/node-trimmer.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/node-trimmer?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
