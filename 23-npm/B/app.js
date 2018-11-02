var express = require('express');
var app = express(); //Express the module returns a function constructor

// app.get('/', function(req, res) {
//     // res.send('hello');
// });

app.get('/user/:id', function(req, res){
    console.log('the user id is ' + req.params.id);
    res.send('hello' + req.params.id);
});

app.post('/login', function(req, res) {
    console.log(req.path);
    res.send('post received');
});

app.use(express.static('public'));
app.listen(8080); //running server.

