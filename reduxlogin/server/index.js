import express from 'express';

import user from './routes/users';
import auth from './routes/auth'
import event from './routes/event'

import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());
app.use('/api/users', user)
app.use('/api/auth', auth)
app.use('/api/events', event)

app.get('/', (req,res)=>{
    res.send('hello world in Node.js fuck')
})

app.listen(6060, ()=>{console.log('Running on localhost:6060')})