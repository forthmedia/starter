var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
    app.use(express.static(__dirname + '/src'));
});

// viewed at http://localhost:8000
app.listen(8000);
console.log("Application running at localhost:8000");