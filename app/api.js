var express = require('express');

var devChatRouter = module.exports = express.Router();
var bodyParser = require('body-parser');

devChatRouter.use(bodyParser.json());

devChatRouter.use('/account',require('./api/login'));
devChatRouter.use('/users', require('./api/users'));
devChatRouter.use('/question', require('./api/questions'));
devChatRouter.use('/comments', require('./api/comments'));
devChatRouter.use('/messages', require('./api/messages'));