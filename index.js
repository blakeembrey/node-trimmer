var WHITESPACE_CHARS = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000'

module.exports = trim

/**
 * Convert the input value to a function.
 */
function toFn (value) {
  if (typeof value === 'function') return value

  var str = Array.isArray(value) ? value : String(value)
  var obj = Object.create(null)

  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true
  }

  return function (char) {
    return obj[char]
  }
}

/**
 * The default trim function executes both sides.
 */
function trim (str, chars) {
  var fn = toFn(chars || WHITESPACE_CHARS)

  return trim.right(trim.left(str, fn), fn)
}

/**
 * Trim characters starting from the left of the string.
 */
trim.left = function trimLeft (str, chars) {
  var fn = toFn(chars || WHITESPACE_CHARS)
  var i = -1

  while (i < str.length && fn(str[++i])) {}

  return str.substr(i)
}

/**
 * Trim characters starting from the right of the string.
 */
trim.right = function trimRight (str, chars) {
  var fn = toFn(chars || WHITESPACE_CHARS)
  var i = str.length

  while (i > 0 && fn(str[--i])) {}

  return str.substr(0, i + 1)
}
