var express = require('express'),
    app = express(),
    port = process.env.PORT || 6666,
    mongoose = require('mongoose'),
    Event = require('./api/models/eventModels.js'),
    bodyParser = require('body-parser');




    app.listen(port);
    console.log('LISTENING ON ' + port);
