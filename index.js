var whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';

// Turn the string into an object for constant time lookups
var toObject = function (str) {
  if (Array.isArray(str)) {
    str = str.join('');
  } else {
    str = '' + str;
  }

  var obj = {};
  while (str) {
    obj[str[0]] = true;
    str = str.slice(1);
  }
  return obj;
};

var trim = module.exports = function (str, chars) {
  str = trim.left(str, chars);
  str = trim.right(str, chars);
  return str;
};

trim.left = function (str, chars) {
  str   = '' + str;
  chars = toObject(chars || whitespace);
  while (chars[str[0]]) {
    str = str.slice(1);
  }
  return str;
};

trim.right = function (str, chars) {
  str   = '' + str;
  chars = toObject(chars || whitespace);
  while (chars[str.slice(-1)]) {
    str = str.slice(0, -1);
  }
  return str;
};
