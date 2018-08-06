global.config = require('./config/config.json');
global.cassandraClient = require('./config/dbConnection');

let postEmployeeRoute = require('./apis/postEmployee/routes/postEmployee');
let getEmployeeRoute = require('./apis/getEmployee/routes/getEmployee');

let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let swaggerUi = require('swagger-ui-express');
let swaggerDoc = require('swagger-jsdoc');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let server=app.listen(global.config.CONSTANTS.PORT, function () {
  process.stdout.write(`Server is running on PORT : ${global.config.CONSTANTS.PORT}`);
});


server.on('connection', function(socket) {
  socket.setTimeout(60000);
  socket.setKeepAlive(true,60000);
})
app.use(global.config.CONSTANTS.BASE_ROUTE, postEmployeeRoute, getEmployeeRoute);

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'Employee APIS',
    version: '1.0.0',
    description: 'Access Employee APIS',
  }
};

// options for swagger jsdoc 
let options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./apis/postEmployee/routes/postEmployee.js',
    './apis/getEmployee/routes/getEmployee.js'],
};

// initialize swaggerJSDoc
let swaggerSpec = swaggerDoc(options);

app.use(global.config.CONSTANTS.SWAGGER_ROUTE, swaggerUi.serve, swaggerUi.setup(swaggerSpec, true));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.send("Invalid URL")
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
