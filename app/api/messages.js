var express = require('express');
var sendMessage = require('../chat');
var is_authenticated = require('./authenticate');

var Message = require('../models/messages').Message;

var messageRouter = module.exports = express.Router();

messageRouter.use(is_authenticated);

messageRouter.post('/', function(req, res) {
    var message = Message();
    message.from = req.body.from;
    message.sendTo = req.body.sendTo;
    message.content = req.body.content;
    console.log("New message send from  " + message.from + " to "
         + message.sendTo + ": " + message.content);
    message.save(function(err, message) {
        if (err) {
            res.json(err);
        } else {
            sendMessage(message);
            res.json(message);
        }
    });
});

// Returns all the messages
messageRouter.get('/:from/:sendTo', function(req, res) {
    var from = req.params.from;
    var sendTo = req.params.sendTo;
    Message.find({from: from, sendTo: sendTo}, function(err, messages) {
        if (err) {
            res.json(err);
        } else {
            console.log('Messages found ' + messages);
            res.json(messages);
        }
    }).sort({timestamp: 'asc'});
});
