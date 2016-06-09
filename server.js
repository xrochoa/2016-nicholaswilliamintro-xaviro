var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8000, function() {
    console.log('Serving at http://localhost:8000');
});