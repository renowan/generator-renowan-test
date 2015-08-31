'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
// projectDir = ''

var BackboneGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    console.log('\n\n\n');
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Yo: Renowan Test template'.red);
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('\n\n\n');

    this.option('appPath', {
      desc: 'app',
      type: 'String',
      defaults: 'app',
      banner: 'some banner'
    });

    this.env.options.appPath = this.options.appPath || 'app';

    // yo loc --coffee
    // this.option('coffee');

  },

  writing: {

  	basefiles: function(){

  		this.fs.copyTpl(
  			this.templatePath('_bower.json'),
  			this.destinationPath( 'bower.json' )
  		);

  		this.fs.copyTpl(
  			this.templatePath('_package.json'),
  			this.destinationPath( 'package.json' )
  		);


  		this.copy('editorconfig', 'editorconfig');
  		this.copy('jshintrc', 'jshintrc');
  		this.copy('index.html', this.env.options.appPath + '/index.html');
  		this.copy('css/main.css', this.env.options.appPath + '/css/main.css');
  		this.copy('js/main.js', this.env.options.appPath + '/js/main.js');


  	}



  },



  install: function () {
    this.installDependencies();
  }
});


module.exports = BackboneGenerator;