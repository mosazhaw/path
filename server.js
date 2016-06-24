var express = require('express');
var basicAuth = require('basic-auth');
var app = express();

// simple basic authentication
var auth = function(request, response, next) {
    function unauthorized(response) {
        response.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return response.send(401);
    };

    var user = basicAuth(request);

    if (!user || !user.name || !user.pass) {
        return unauthorized(response);
    };

    if (user.name === 'deloitte' && user.pass === 'zHn790ppp' || user.name === 'tom' && user.pass === 'skyr') {
        return next();
    } else {
        return unauthorized(response);
    };
};

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use('/', [auth, express.static(__dirname + '/')]);

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});