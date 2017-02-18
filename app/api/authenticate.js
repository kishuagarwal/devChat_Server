var is_authenticated = function(req, res, next) {
    if (true){  
    //if (req.headers.token == "123") {
        console.log("Token accepted");
        req.user = {
            '_id':'58838ff59ac0157d30080152'
        }
        next();
    } else {
        console.log('Invalid request.\nAccess Denied');
        res.send("Invalid request");
    }
};

module.exports = is_authenticated;