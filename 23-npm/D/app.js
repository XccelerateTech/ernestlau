const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

app.use(bodyParser.json({ extended: false }))
app.use(fileUpload());

app.post('/test',(req,res)=>{
    console.log(req.body);
    var array = req.body;
    var result = array.reduce(function(accumulator, number){
        return accumulator + number;
    }, 0)
    console.log(typeof result)
    // console.log(req.files);

    // var obj = req.body.number
    // console.log(obj)
	res.send(`Login infomation received. Your password is ${result}`) ;
});

app.listen(8080);