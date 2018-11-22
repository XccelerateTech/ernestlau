const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 8443;
const https = require('https')
const fs = require('fs')


const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };

app.use(session({
    secret: 'supersecret'
}));

app.use(bodyParser());

setupPassport(app);

app.use('/', router);

// app.listen(port);
https.createServer(options, app).listen(port);
console.log('listening on port ', port);