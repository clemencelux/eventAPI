var express = require('express'),
    app = express(),
    port = process.env.PORT || 6666,
    mongoose = require('mongoose'),
    Event = require('./api/models/eventModels.js'),
    bodyParser = require('body-parser');

// CONNECT TO DB
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/eventApi', { useNewUrlParser: true });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var routes = require('./api/routes/eventRoutes.js');
    routes(app);




    app.listen(port);
    console.log('LISTENING ON ' + port);
