'use strict';


var mongoose = require('mongoose'),
    Event = mongoose.model('Events');



  //api/events/

    exports.list_all_events = function (req, res) {
      Event.find({}, function(err, event) {
        if(err)
        res.send(err);
        res.json(event);
      });
    };

    exports.create_an_event = function (req, res) {
      var new_event = new Event(req.body);
      new_event.save(function(err, event) {
        if(err)
        res.send(err);
        res.json(event);
      })
    };


    //api/events/:eventID

    exports.read_an_event = function (req, res) {
      Event.findById(req.params.cookieId, function (err, event) {
        if(err)
        res.send(err);
        res.json(event);
      })
    };


    exports.update_an_event = function (req, res) {
      Event.findOneAndUpdate({_id: req.params.cookieId}, req.body, {new: true}, function (err, event) {
        if(err)
        res.send(err);
        res.json(event);
      })
    };


    exports.delete_an_event = function (req, res) {
      Event.remove({
        _id: req.params.cookieId
      }, function (err, event) {
        if(err)
        res.send(err);
        res.json({message: 'event deleted'});
      });
    };
