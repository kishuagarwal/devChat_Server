var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var MessageSchema = Schema({
    'from': {type: String, required: true},
    'sendTo': {type: String, required: true},
    'content': {type: String, default: false },
    'timestamp': {type: Date, default: Date.now},
});

var Message = mongoose.model('Message', MessageSchema);

exports.Message = Message;