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
    name: 'includeGuard',
    message: 'Include Guard:',
    default: ''
  }];

  this.prompt(prompts, function (props) {
    this.className = props.className;
    this.includeGuard = props.includeGuard;
    this.classNameLower = props.className.toLowerCase();
    this.classNameUpper = props.className.toUpperCase();
    cb();
  }.bind(this));
};

CppClassGenerator.prototype.source = function source() {
  this.mkdir('source/component/');
  this.template('source/System.hpp', 'source/system' + this.className + '.hpp');
}
