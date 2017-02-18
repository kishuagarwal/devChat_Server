var express = require('express');
var is_authenticated = require('./authenticate');

var Chat = require('../models/chats').Chat;

var chatRouter = module.exports = express.Router();

chatRouter.use(is_authenticated);

// Returns all the user chats
chatRouter.get('/', function(req, res) {
    Chat.find({'participants' : {'_id': req.user._id }}, function(err, chats) {
        if (err) {
            res.json(err);
        } else {
            console.log('Chats found' + chats);
            res.json(chats);
        }
    }).populate('participants');
});

chatRouter.post('/', function(req, res) {
    var chat = Chat();
    chat.created_by  = req.user._id;
    chat.participants = [req.user._id, req.body.with];
    chat.save(function(err, chat) {
        if (err) {
            res.json(err);
        } else {
            res.json(chat);
        };
    });
});