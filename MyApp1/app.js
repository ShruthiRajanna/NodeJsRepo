var express = require('express');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var index = require('./index.js');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

http.createServer(app).listen(4000, function(){
  process.stdout.write("Server running on 4000")
})

app.use('/', index);

var options = {
    swaggerDefinition: {
        info: {
            title: 'My App API',
            version: '0.0.1'
        }
    },
    apis: [
        './index.js'
    ]
};

var swaggerDocument = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, true));

app.use(function (req, res, next) {
    var err = new Error();
    err.message = 'Invalid URL';
    err.status = 404;
    next(err);
});


app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
