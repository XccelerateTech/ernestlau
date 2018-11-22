var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: 'test'
});

client.on('error', function(err){
    console.log(err);
});

// client.set('location', 'Tokyo', function(err, data) {
//     if(err) {
//         return console.log(err);
//     }

//     client.get('location', function(err, data){
//         if(err) {
//             return console.log(err);
//         }
//         console.log('The value is ', data);
//         var name = data;
//             client.del('location', (err, data) => {
//         if(err) {
//             return console.log(err);
//         }
//         console.log(`${name} already deleted.`)
//     })
//     });

// });

// client.setex('location', 20, 'Tokyo', function(err, data) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log(data)
// }); // return OK

// client.sadd('firework', 'Sun', 'Moon', 'Sea', function(err,res){
//     client.smembers('firework', function(err,res){
//         if(err){
//             console.log(err);
//         }
//         console.log(res)
//     })
// })

for (i = 0; i < 1000000; i++) { 
    client.set(`key${i}`, `something${i}`, function(err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
}