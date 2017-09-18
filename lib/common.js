'use strict';

const assert = require('assert');
const repl = require('repl');
const helpers = require('./helpers');

exports.setupRepl = (options) => {
  assert(options);
  assert(options.name);
  assert(typeof options.expose === 'object');

  const name = options.name;

  const r = repl.start(`${name}> `);
  const define = helpers.defineContext(r.context);
  const expose = options.expose;

  Object.keys(expose).forEach((name) => {
    define(name, expose[name]);
  });

  return r;
};
