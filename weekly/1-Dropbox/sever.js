//package setup
var fs = require('fs')
var express = require('express')
var multer = require('multer')
const path = require('path');
var bodyParser = require('body-parser')
const port = 8080;

//middleware
var app = express();
var upload = multer({ dest: 'uploads/' })

//Mutiliple upload
app.post('/upload-multi', upload.array('myfile', 20), function (req, res, next) {
    var reqArr = req.files
    reqArr.forEach(function (file) {
        //got file type
        name = file.originalname;
        nameArray = name.split('');
        var nameMime = [];
        l = nameArray.pop();
        nameMime.unshift(l);
        while (nameArray.length != 0 && l != '.') {
            l = nameArray.pop();
            nameMime.unshift(l);
        }
        //save file mime
        Mime = nameMime.join('');
        //rename file & plus mine
        console.log('show me random name: ' + './uploads/' + file.filename)
        console.log('show me adjusted name: ' + './uploads/' + name)
        fs.renameSync('./uploads/' + file.filename, './uploads/' + name, function (err) {
            if (err) {
                throw err;
            }
        })
    });
    res.send(`Mulitiple upload, You've successfuly uploaded ${req.files.length} files`);
})
//Single upload
app.post('/upload-single', upload.single('myfile'), function (req, res, next) {
    // if(req.file.size > 4000){
    //     global.window.alert('hi')
    // }
    var file = req.file;
    // console.log("名稱：%s", file.originalname);
    // console.log("mime：%s", file.mimetype);
    //got file type
    var name = file.originalname;
    // var nameArray = name.split('');
    // var nameMime = [];
    // l = nameArray.pop();
    // nameMime.unshift(l);
    // while (nameArray.length != 0 && l != '.') {
    //     l = nameArray.pop();
    //     nameMime.unshift(l);
    // }
    // //save file mime
    // Mime = nameMime.join('');
    // console.log(Mime);
    res.send(`Done! You've uploaded ${name}`);
    //rename file & plus mine
    console.log('show me name: ' + './uploads/' + file.filename)
    console.log('show me name: ' + './uploads/' + name)
    fs.renameSync('./uploads/' + file.filename, './uploads/' + name, function (err) {
        if (err) {
            throw err;
        }
    })
    // fs.renameSync('./uploads/', file.filename, './uploads/', name+Mime);
})

//request index.html
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

//request anything in upload
app.get('/uploads/:id', function (req, res) {
    res.sendFile(path.join(__dirname, `/uploads/${req.params.id}`));
});

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});