var express = require('express');
var is_authenticated = require('./authenticate');

var Question = require('../models/questions').Question;

var questionsRouter = module.exports = express.Router();


// For all the requests, first check if the user is authenticated or not
questionsRouter.use(is_authenticated);

// Add a question
questionsRouter.post("/add" ,function(req, res) {
    console.log('Adding question');
    var question = Question();
    question.title = req.body.title;
    question.body = req.body.body;
    question.asked_by = req.body.username;
    question.save(function(err, question) {
        if (err)
            res.json(err) 
        else {
            res.json(question);
        }
    });
});

// Get a particular question
questionsRouter.get("/:question_id", function(req, res) {
    console.log('Fetching question with id ' + req.params.question_id);
    Question.findById(req.params.question_id, function(err, question) {
        if (err) {
            res.json(err);
        } else {
            res.json(question);
        }
    });
});

// Get the list of all questions
questionsRouter.get("/", function(req, res) {
    Question.find(function(err, questions) {
        if (err) {
            res.json(err);
        } else {{
            res.json(questions);
        }}
    }).populate('comments');
});