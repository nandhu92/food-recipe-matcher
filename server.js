var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var app = express();


app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(bodyParser.json());
app.use(passport.initialize());
// app.use(session({secret : 'abcd',
// 								saveUninitialized : false,
// 								resave : false}));


require('./server/config/mongoose.js');
require('./server/config/passport.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('Running on port 8000!');
})
