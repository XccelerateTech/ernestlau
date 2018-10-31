var fs = require('fs');


function copy(path){
    var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });
    var writeable = fs.createWriteStream(__dirname + path);
    readable.pipe(writeable);
}

// readable.on('data', function(chunk){
//     writeable.write(chunk);
// });
copy('/B/file.txt');