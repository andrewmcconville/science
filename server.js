var compress = require('compression');
var express = require('express');
var app = express();

app.use(compress());  

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// app.use(function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});