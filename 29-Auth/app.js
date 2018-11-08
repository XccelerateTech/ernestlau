var express = require('express')
var basicAuth = require('express-basic-auth')

var app = express();

app.use(basicAuth({
    users: { 'admin': '12345' },
    challenge: true,
    // realm: 'My Application'
}))

app.get('/', (req,res)=>{
    res.send('Hello there!')
})

app.get('/pk', (req,res)=>{
    res.send('Hello there!')
})

app.listen(8080, function(){
    console.log('Running at 8080')
})
 
