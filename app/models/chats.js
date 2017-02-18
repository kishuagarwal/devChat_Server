var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChatSchema = Schema({
    'participants': [{type: Schema.Types.ObjectId, ref: 'User' }],
    'created_at': {type: Date, default: Date.now },
    'created_by': {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

var Chat = mongoose.model('Chat', ChatSchema);
exports.Chat = Chat;