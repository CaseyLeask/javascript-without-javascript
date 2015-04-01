// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-voltaire'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  secondary = require('bespoke-secondary'),
  getActiveSlide = require('./getActiveSlide.js');
// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  backdrop(),
  scale(),
  hash(),
  progress(),
  secondary(),
  getActiveSlide()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

