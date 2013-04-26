# String Trim

Quick module to trim any characters from either side of a string.

## Installation

```
npm install string-trim --save
```

## API

```javascript
var trim = require('string-trim');
```

* `trim(string [, characters])`
* `trim.left(string [, characters])`
* `trim.right(string [, characters])`

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
