var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    avatar: {
        type: String,
        default: 'img/default_avatar.png'
    }
});

var User = mongoose.model('User', userSchema);
module.exports = User;