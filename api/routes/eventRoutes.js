'use strict';

module.exports = function(app) {
  var Events = require('../controllers/eventControllers.js');




app.routes('/api/events')
    .get(event.list_all_events)
    .post(event.create_an_event);

app.routes('/api/events/:cookieId')
    .get(event.read_an_event)
    .put(event.update_an_event)
    .delete(event.delete_an_event);


  };
