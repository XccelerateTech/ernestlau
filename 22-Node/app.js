var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if(req.url != '/') { 
        var path = '/flowershop' + req.url;
        fs.createReadStream(__dirname + path).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');