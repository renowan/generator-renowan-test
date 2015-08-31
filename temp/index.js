'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.env.options.appPath = this.options.appPath || 'game';

  },

  initializing: function () {

  },

  writing: function () {

  	var myName = this._args[0];

  	myName = 

  	myName = myName.replace(/^[a-z]/g, function(val){
  	    return val.toUpperCase();
  	});

  	if( this._args[0] ){

  		if( this._args[1] ){

  			var dirname = this._args[1];

  			this.fs.copyTpl(
  				this.templatePath('../../templates/coffee/template-View.coffee'),
  				this.destinationPath(this.env.options.appPath+'/coffee/' + dirname + '/template-'+ myName +'View.coffee'),
  				{ moduleName: myName }
  			);

  		}else{

  			this.fs.copyTpl(
  				this.templatePath('../../templates/coffee/view-ElementView.coffee'),
  				this.destinationPath(this.env.options.appPath+'/coffee/template-'+ myName +'View.coffee'),
  				{ moduleName: myName }
  			);

  		}



  	}else{

  		console.log('\n\n\n');
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('Invalid elementsView name.'.red);
  		console.log('No elementsView name. Enter elementsView name.');
  		console.log('Ex: ' + 'yo loc:elementsView foo'.green);
  		console.log('- - - - - - - - - - - - - - - - - - - - ');
  		console.log('\n\n\n');
  	}



  }
});
