'use strict';

const assert = require('assert');
const fs = require('fs');
const repl = require('repl');
const helpers = require('./helpers');
const path = require('path');

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

  const historyFile = path.join(process.env.HOME, `/.${name}-repl-history`);

  if (fs.existsSync(historyFile)) {
    r.commands.load.action.call(r, historyFile);
  }

  r.on('close', () => {
    r.commands.save.action.call(r, historyFile);
    process.exit(1);
  });

  return r;
};
