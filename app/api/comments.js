var express = require('express');
var is_authenticated = require('./authenticate');

var questions = require('../models/questions');
var Question = questions.Question;
var Comment = questions.Comment;

var commentsRouter = module.exports = express.Router();

commentsRouter.use(is_authenticated);

commentsRouter.post('/add', function(req, res) {
    var question_id = req.body.question_id;
    var comment = Comment();
    comment.title = req.body.title;
    comment.body = req.body.body;
    comment.answered_by = req.body.username;
    console.log(comment + " " + question_id);
    comment.save(function(err, comment) {
        if (err) {
            res.json(err);
        } else {
            Question.update({_id : question_id}, { $push : {comments :  comment._id }}, function(errr, question) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(question);
                }
            });
        }
    });
});

commentsRouter.get('/:comment_id', function(req, res) {
    var comment_id = req.params.comment_id;
    Comment.findById(comment_id, function(err, comment) {
        if (err) {
            res.json(err);
        } else {
            res.json(comment);
        }
    });
});
