var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if (req.url != '/') {
        var path = '/flowershop' + req.url;
        fs.createReadStream(__dirname + path).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');

// Sam sulation
// var http = require('http');
// var fs = require('fs');
// var path = require('path');


// http.createServer(function(req,res){
//     let filePath = req.url == '/' ? "index.html" : req.url;

//     res.writeHead(200);

//     fs.createReadStream(path.join(__dirname, 'flowershop', filePath)).pipe(res);

// }).listen(8080, '127.0.0.1')