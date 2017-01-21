var express = require('express');
var mongoose = require('mongoose');
require('./app/chat');
var app = express();

mongoose.connect('mongodb://localhost/devChat')
mongoose.connection.once('open', function() {
    console.log('Connection to mongodb opened.');
})
.on('error', function(error) {
    console.log('DB error occurred: ' + error);
});

var port = process.env.PORT || 8080;

app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});
app.use(require('./app/api'));

app.listen(port);
console.log('Server started');