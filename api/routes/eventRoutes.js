'use strict';

module.exports = function(app) {
  var Events = require('../controllers/eventControllers.js');




app.route('/api/events')
    .get(Events.list_all_events)
    .post(Events.create_an_event);

app.route('/api/events/:cookieId')
    .get(Events.read_an_event)
    .put(Events.update_an_event)
    .delete(Events.delete_an_event);


  };
