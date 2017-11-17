var express = require('express'),
  app = express(),
  port = process.env.PORT || 8100,
  mongoose = require('mongoose'),
   Task = require('./api/models/doneModel'), //created model loading here
   bodyParser = require('body-parser');
   
 // mongoose instance connection url connection
 mongoose.Promise = global.Promise;
 mongoose.connect('104.198.103.85');


 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());


 var routes = require('./api/routes/doneRoutes'); //importing route
 routes(app); //register the route


 app.listen(port);

console.log('Done RESTful API server started on: ' + 8100);
