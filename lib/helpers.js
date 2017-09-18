'use strict';

const assert = require('assert');

exports.defineContext = (context) => {
  return (name, value) => {
    Object.defineProperty(context, name, {
      configurable: false,
      enumerable: true,
      value: value
    });
  };
};

exports.capitalize = str => str[0].toUpperCase() + str.substr(1);

exports.fnName = (fn, fallback) => {
  assert(typeof fn === 'function');

  const match = Function.toString.call(fn).match(/^function ([^()]*)/);

  if (match && match[1]) {
    return match[1];
  }

  return exports.capitalize(fallback);
};
