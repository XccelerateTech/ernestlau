const fs = require('fs')

function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                // console.log(files);
                resolve(files);
            }
        });
    });
}

function showStat(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file,(err, res) => {
            if (err) {
                reject(err);
            } else {
                // console.log(res.isDirectory())
                resolve(res)
            }
        });
    });
}

module.exports = {
    readDir: readDir,
    showStat: showStat
}

// readDir('./files/files');
// showStat('./files/files/README.md')

// fs.stat("./files/files/README.md",function(err,stats){
//         console.log(err);
//         console.log(stats.isDirectory())
//     })



// fs.readdir('./files/files',function(err,files){
// 	if(err){
// 		return console.error(err);
// 	}
	// files.forEach(function(file){
	// 	console.info(file);
	// });
// });
