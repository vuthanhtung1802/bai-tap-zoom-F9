function isString(value) {
  return typeof value === 'string'
}

// console.log(isString('vu thanh tung')); // true
// console.log(isString(123)); // false

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value)
}

// console.log(isNumber(123)); // true
// console.log(isNumber('123')); // false
// console.log(isNumber('tung')); // false

function isBigInt(value) {
  return typeof value === 'bigint'
}

// console.log(isBigInt(1233445677777666)); // false

function isBoolean(value) {
  return typeof value === 'boolean'
}

// console.log(isBoolean(true));  // true
// console.log(isBoolean(false)); // true

function isNull(value) {
  return value === null
}

// console.log(isNull(123)); // false
// console.log(isNull('tung')); // false
// console.log(isNull({})); // false
// console.log(isNull(null)); // true

function isUndefined(value) {
  return typeof value === 'undefined'
}

// console.log(isUndefined(123)); // false
// console.log(isUndefined('tung')); // false
// console.log(isUndefined({})); // false
// console.log(isUndefined(undefined)); // true

function isSymbol(value) {
  return typeof value === 'symbol'
}

// console.log(isSymbol(Symbol('id'))) // false
// console.log(isSymbol(Symbol('name'))) // false
// console.log(isSymbol(Symbol('address'))) // true

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// console.log(isObject(123)); // false
// console.log(isObject('tung')); // false
// console.log(isObject({})); // true
// console.log(isObject([])); // true
// console.log(isObject(undefined)); // true

function isArray(value) {
  return Array.isArray(value)
}

// console.log(isObject(123)); // false
// console.log(isObject('tung')); // false
// console.log(isObject({})); // true
// console.log(isObject([{}])); // true
// console.log(isObject(undefined)); // true

function isFunction(value) {
  return typeof value === 'function'
}

// console.log(isFunction(123)); // false
// console.log(isFunction('tung')); // false
// console.log(isFunction({})); // false
// console.log(isFunction(function() {})) // true

export { isString, isArray, isNumber, isFunction, isUndefined, isBoolean }
