#!/usr/bin/env node
const getQuote = require('./getQuote.js');

const [,, ...args] = process.argv;
getQuote();
