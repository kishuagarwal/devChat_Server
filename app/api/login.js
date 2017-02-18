var express = require('express');
var User = require('../models/user');

var loginRouter = module.exports = express.Router();


// Login, create a account
loginRouter.post('/', function(req, res) {
    var create = req.body.create;
    if (create) {
        var user = User();
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err, user) {
            if (err)
                res.json(err);
            else {
                console.log('Account created ' + user.username);
                res.json(user);
            }
        });

    } else {
        var username = req.body.username;
        var password = req.body.password;
        var user = User.findOne({username: username}, function(err, user) {
            console.log('Logging into account of ' + username);
            if (err) {
                res.json(err);
            } else {
                console.log(user + " " + password);
                if (user == null || user.password != password) {
                    res.json({status: 404});
                }
                else {
                    res.json({
                        status: 200,
                        user: user,
                    });
                }
            }
        });
    }
});

