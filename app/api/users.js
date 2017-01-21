var express = require('express');
var is_authenticated = require('./authenticate');

var User = require('../models/user');

var userRouter = module.exports = express.Router();

userRouter.use(is_authenticated);

// Returns all the users
userRouter.get('/', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.json(err);
        } else {
            User.find(function(err, users) {
                if (err) {
                    res.json(err);
                } else {
                    var returnedUsers = [];
                    for (var index= 0; index < users.length; index++) {
                        returnedUsers[index] = {
                            username: users[index].username,
                            avatar: users[index].avatar,
                            first_name: users[index].first_name,
                            last_name: users[index].last_name
                        };
                    }
                    res.json(returnedUsers);
                }
            });
        }
    });
});

userRouter.get('/:username', function(req, res) {
    var username = req.params.username;
    User.findOne({username: username}, function(err, user) {
        if (err) {
            console.log('Error while getting the user ' + username + ' ' + err);
            res.json(err);
        } else {
            console.log('User got ' + user.username);
            var returnedUser = {
                username: user.username,
                avatar: user.avatar,
                first_name: user.first_name,
                last_name: user.last_name
            }
            res.json(returnedUser);
        }
    });
});
