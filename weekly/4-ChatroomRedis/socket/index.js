const Messages = require('../models/Messages');
const moment = require('moment');
var redis = require('redis');
require('dotenv').config()

class SocketHander {

    constructor() {
        this.db;
    }

    connect() {
        this.db = redis.createClient({
            host: 'localhost',
            port: 6379,
            password: process.env.REDIS_PW
        });

        this.db.on('error', function(err){
            console.log(err);
        });
        
        this.db.Promise = global.Promise; 
    }

    getMessages(next) {
        this.db.lrange('message',0,50, (err,res)=> //only retreive the last x message
        {
            // JSON.parse(res[0])
            next(res);
        })      
    }

    storeMessages(data) {
        console.log(data);
        this.db.rpush('message', JSON.stringify({
            name: data.name,
            msg: data.msg,
            time: moment().valueOf()
        }), (err,res) => {
            if (err) {
                console.log(err)
            }
            console.log('LPUSH success!')
        })
    }
}

module.exports = SocketHander;