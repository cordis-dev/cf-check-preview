'use strict';

function greet(name) {
  debugger;
  return `Hello, ${name || 'world'}`;
}

module.exports = greet;
