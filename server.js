var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/dist'));

app.listen(8000, function() {
    console.log('Serving at http://localhost:8000');
});