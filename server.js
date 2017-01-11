var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var app = express();


app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./server/config/mongoose.js');
require('./server/config/passport.js');
require('./server/config/routes.js')(app);

app.listen(process.env.PORT || 8000, function(){
	console.log('Running');
})
