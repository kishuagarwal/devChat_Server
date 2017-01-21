var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CommentSchema = Schema({
    'body': {type: String, required: true},
    'answered_by': {type: String, required: true},
    'created': {type: Date, default: Date.now},
});

var QuestionSchema = Schema({
    'title': {type: String, required: true},
    'body': {type: String, required: true},
    'asked_by': { type: String, required: true},
    'is_resolved': {type: Boolean, default: false },
    'created': {type: Date, default: Date.now},
    'comments': [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var Comment = mongoose.model('Comment', CommentSchema);
var Question = mongoose.model('Question', QuestionSchema);

exports.Question = Question;
exports.Comment = Comment;