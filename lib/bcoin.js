
'use strict';

const bcoin = require('bcoin');
const helpers = require('../lib/helpers');
const lib = exports;

// We expose everything as Keys and Capitalize if class
const keys = Object.keys(bcoin);

Object.getOwnPropertyNames(bcoin)
  .forEach((name) => {
    const obj = bcoin[name];
    let key = name;

    if (typeof obj === 'function') {
      key = helpers.fnName(obj, name);
    }

    lib[key] = bcoin[name];
  });
