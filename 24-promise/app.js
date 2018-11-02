var readDir = require('./FSpromise').readDir
var showStat = require('./FSpromise').showStat

var checkFolderStatus = function (path) {
    readDir(path)
        .then(function (res) {
            res.forEach(function (n) {
                showStat(path + '/' + n)
                    .then(function (res) {
                        if (res.isDirectory()) {
                            console.log(path + '/' + n + ' is Directory: ' + res.isDirectory())
                            var newTest = path + '/' + n
                            return checkFolderStatus(newTest);
                        } else {
                            console.log(path + '/' + n + ' is Directory: ' + res.isDirectory())
                        }
                    }
                    )
            });
        })
}

checkFolderStatus('./files');