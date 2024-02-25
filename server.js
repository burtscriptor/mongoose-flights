var createError = require('http-errors'); // for handling errors??
var express = require('express'); // for using express
var path = require('path'); // a ulities for working with file and directory paths, installed with express.
var cookieParser = require('cookie-parser'); //allows access to parse cookies, what are they?
var logger = require('morgan'); // what dose this do?

require('dotenv').config();
// connect to database with AFTER the config vars are processed? what dose this mean?
require('./config/database')

var indexRouter = require('./routes/index');
//var flightsRouter = require('./routes/flights'); //need to make this file

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
//app.use('/flights', flightsRouter); need to unmark once routers set up

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


