const Messages = require('../models/Messages');
const moment = require('moment');
var redis = require('redis');
require('dotenv').config()

//setup redis
// var client = redis.createClient({
//     host: 'localhost',
//     port: 6379,
//     password: process.env.REDIS_PW
// });
//

class SocketHander {

    constructor() {
        this.db;
    }

    connect() {
        this.db = require('mongoose').connect(`mongodb://admin:1234ab@ds153785.mlab.com:53785/chatroom-test`);
        this.db.Promise = global.Promise;
    }

    // connect() {
    //     this.db = redis.createClient({
    //         host: 'localhost',
    //         port: 6379,
    //         password: process.env.REDIS_PW
    //     });

    //     this.db.on('error', function(err){
    //         console.log(err);
    //     });
        
    //     this.db.Promise = global.Promise;

        // this.db.lpush('message', 'Hello!', (err,res) => {
        //     if (err) {
        //         console.log(err)
        //     }
        //     console.log('LPUSH success!')
        // })

        // this.db.lpush('message', JSON.stringify({
        //     name: 'Peter',
        //     msg: 'just testing!',
        //     time: '1542816087725'
        // }), (err,res) => {
        //     if (err) {
        //         console.log(err)
        //     }
        //     console.log('LPUSH success!')
        // })

        // this.db.lrange('message',0,-1, (err,res)=>
        // {
        //     console.log(JSON.parse(res[0]))
        // })        
    // }

    // getMessages() {
    //     return this.db.lrange('message',0,-1, (err,res)=> {return err,res});
        // this.db.lrange('message',0,-1, (err,res)=>
        // {
        //     console.log(res)
        // })        
    // }

    getMessages() {
        return Messages.find();
    }

    storeMessages(data) {

        console.log(data);
        const newMessages = new Messages({
            name: data.name,
            msg: data.msg,
            time: moment().valueOf(),
        });

        const doc = newMessages.save();
    }
}

module.exports = SocketHander;