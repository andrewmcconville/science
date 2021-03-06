var compress = require('compression'),
	express = require('express');

var app = express();

// activate gzip
app.use(compress());

//send prerendered pages to bots
//app.use(require('prerender-node'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist', { maxAge: 86400000 }));

// all URLs go to index so angular can run first
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

// terminal message
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});