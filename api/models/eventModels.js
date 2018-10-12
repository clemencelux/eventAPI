'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var EventsSchema = new Schema ({
  name : {
    type: String,
    required: 'name of event'
  },
  cookieId: {
    type : ObjectId,
    required: true,
  },
  referrer: {
    type: String,
    required: 'source of event'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Events', EventsSchema);
