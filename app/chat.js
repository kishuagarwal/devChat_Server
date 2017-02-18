var WebSocketServer = require('uws').Server;
var wss = new WebSocketServer({port: 3000});

function onMessage(message) {
    console.log("New message " + message);
    var sendTo = message.sendTo;
    if (sendTo in socketMap) {
        var destSocket = socketMap[sendTo];
        destSocket.send(message);
    }
}

// Map users -> socket
var usersMap = {};

// List of users online right now
var onlineUsers = {};

var socketMap = {};


wss.on('connection', function(ws) {
    console.log("A client connected");
    ws.send({
        name: 'kishu'
    });
    ws.on('message', function(message) {
        message = JSON.parse(message);
        if (message.login) {
            console.log("A new user logged in " + message.login);
            socketMap[message.login] = ws;
        } else {
            onMessage(message);
        }
    });
});

module.exports = onMessage;