var express = require('express')
var basicAuth = require('express-basic-auth')

var app = express();

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    realm: 'My Application'
}));

const USERS = [
    {
        "username":"gordon",
        "password":"abc"
    },
    {
        "username":"test",
        "password":"abc"
    }
]

function myAuthorizer(username, password) {
    return USERS.some((user)=>{
        return user.username == username && user.password == password
    })
}

app.get('/', (req,res)=>{
    var userHeader = new Buffer(req.headers.authorization.split(" ")[1], 'base64').toString()
    console.log(userHeader.indexOf(':'))
    res.send('Hello there!' + userHeader.substring(0, userHeader.indexOf(':')))
})

app.get('/pk', (req,res)=>{
    res.send('Hello there!')
})

app.listen(8080, function(){
    console.log('Running at 8080')
})
 
