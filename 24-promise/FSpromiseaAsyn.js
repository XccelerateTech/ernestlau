const util = require('util');
const fs = require('fs')
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function checkFolderStatus(path){
    try{
        let res1 = await readdir(path)
        res1.forEach(function(n){stat(n).then((c)=> console.log(path + "/" + n + " is Directory: " + c.isDirectory()))})
    }catch(err){
        console.log(err);
        throw err;
    }
}

checkFolderStatus('./files')