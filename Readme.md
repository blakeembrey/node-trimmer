# Trimmer

[![NPM version](https://img.shields.io/npm/v/trimmer.svg?style=flat)](https://npmjs.org/package/trimmer)
[![Build status](https://img.shields.io/travis/blakeembrey/node-trimmer.svg?style=flat)](https://travis-ci.org/blakeembrey/node-trimmer)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/node-trimmer.svg?style=flat)](https://coveralls.io/r/blakeembrey/node-trimmer?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/node-trimmer.svg)](https://greenkeeper.io/)

Trim characters from either side of a string.

## Installation

```
npm install trimmer --save
```

## API

```js
var trim = require('trimmer')
```

* `trim(string [, characters])`
* `trim.left(string [, characters])`
* `trim.right(string [, characters])`

**P.S.**: `characters` can be one of either an string, array or function.

```js
trim('  test  ') //=> 'test'
trim.left('  test  ') //=> 'test  '
trim.right('  test  ') //=> '  test'

trim('test', 't') //=> 'es'
trim('testing', 'ing') //=> 'test'
trim.left('test', 't') //=> 'est'
trim.right('test', 't') //=> 'tes'
```

## License

MIT
