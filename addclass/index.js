'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var CppClassGenerator = module.exports = function CppClassGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CppClassGenerator, yeoman.generators.Base);

CppClassGenerator.prototype.basicDetails = function basicDetails() {
  var cb = this.async();

  var prompts = [{
    name: 'className',
    message: 'Class name:',
    default: 'Foo'
  }, {
    name: 'parent',
    message: 'Inherits from:',
    default: ''
  }, {
    name: 'folder',
    message: 'In folder (source/...):',
    default: ''
  }, {
    name: 'includeGuard',
    message: 'Include Guard:',
    default: ''
  }, {
    name: 'headerOnly',
    message: 'Just generate header in source?',
    type: 'confirm',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.className = props.className;
    this.includeGuard = props.includeGuard;
    this.classNameLower = props.className.toLowerCase();
    this.classNameUpper = props.className.toUpperCase();
    this.parentClass = props.parent;
    this.folder = props.folder;
    this.folder = this.folder == '' ? '' : this.folder + '/';
    this.headerOnly = props.headerOnly;
    cb();
  }.bind(this));
};

CppClassGenerator.prototype.source = function source() {
  this.mkdir('source/' + this.folder);
  this.template('src/foo.hpp', 'source/' + this.folder + this.className + '.hpp');
  if(!this.headerOnly) {
    this.template('src/foo.cpp', 'source/' + this.folder + this.className + '.cpp');
  }
}
