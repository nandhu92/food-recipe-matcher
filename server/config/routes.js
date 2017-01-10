var recipes = require('../controllers/recipes.js');
var users = require('../controllers/users.js');
var jwt = require('express-jwt');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

module.exports = (function(app){
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/get_recipe', function (req, res){

recipes.find(req, res);
  })

  app.post('/show_ingredients', function (req, res){

  users.names(req, res);
    })

  app.post('/save_recipe', function (req, res){

  users.save(req, res);
    })


  app.post('/register', users.register);

  app.post('/registerValidate', function (req, res){
//console.log(req);
  users.login(req, res);
    })
  //  app.post('/registerValidate', users.login);

  app.post('/userLogin', function (req, res){
  //console.log(req);
  users.userLogin(req, res);

    })



});
