var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.redirect('/public/index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
