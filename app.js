/**
 * Created by leasong on 17/4/28.
 */
var express = require('express');
var app = express();

var routes = require('./app/routes');
var middlewares = require('./app/middlewares')

// middleware
for (m in middlewares) {
    app.use(middlewares[m])
}

// router（分模块）
for(route in routes) {
  app.use(route, routes[route])
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
