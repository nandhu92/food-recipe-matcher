// require this file in your server (so it loads your models)
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://admin:password@ds155428.mlab.com:55428/recipe');
//process.env.MONGOLAB_URI
//|| 'mongodb://localhost/recipe'
//mongodb://admin:password@ds155428.mlab.com:55428/recipe
var models_path =path.join( __dirname , '/../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
