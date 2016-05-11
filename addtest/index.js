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
    name: 'folder',
    message: 'In folder (tests/...):',
    default: ''
  }];

  this.prompt(prompts, function (props) {
    this.className = props.className;
    this.folder = props.folder;
    this.folder = this.folder == '' ? '' : this.folder + '/';
    cb();
  }.bind(this));
};

CppClassGenerator.prototype.source = function source() {
  this.mkdir('tests/' + this.folder);
  this.template('src/foo.cpp', 'tests/' + this.folder + this.className + '.cpp');

}
