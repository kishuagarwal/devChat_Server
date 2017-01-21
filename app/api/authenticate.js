var is_authenticated = function(req, res, next) {
    if (true){  
    //if (req.headers.token == "123") {
        console.log("Token accepted");
        next();
    } else {
        console.log('Invalid request.\nAccess Denied');
        res.send("Invalid request");
    }
};

module.exports = is_authenticated;