var pg = require('pg');
var fs = require('fs');
var CsvReadableStream = require('csv-reader');

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

var config = {
    user: 'admin',
    database: 'Chung',
    password: 'test',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

// Init transaction function
function begin(done) {
    client.query('BEGIN', function (err) {
        if (err) {
            console.log(err) // Handle error here
        }
        done();
    });
}

function commit(done) {
    client.query('COMMIT', function (err) {
        if (err) {
            console.log(err) //Handle error here
        }
        done();
    });
}

function rollback(done) {
    client.query('ROLLBACK', function (err) {
        if (err) {
            console.log(err) //Handle error here
        }
        done();
    });
}
//

// BUY SELL FUNCTION

async function buy(fruit, amount, callback){
    try{
        await client.query('BEGIN')
        await client.query(`UPDATE stock SET quantity = quantity+${amount} FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = '${fruit}';`)
        await client.query('COMMIT')
        await console.log(`Transaction is committed! @BUY@ OK!!`)

    }catch(err){
        await client.query('ROLLBACK')
        console.log(err.code);
        throw err;
    }
}

// function buy(fruit, amount, callback) {
//     begin(function () {
//         client.query(`UPDATE stock SET quantity = quantity+${amount} FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = '${fruit}';`, function (err, results) {
//             if (err) {
//                 rollback(function () {
//                     console.log("Transaction is rolled back!");
//                 });
//             } else {
//                 commit(function () {
//                     console.log(`Transaction is committed! @BUY@ OK!!`);
//                 });
//             }
//         });
//     });
// };

function sell(fruit, amount, callback) {
    begin(function () {
    client.query(`SELECT * FROM stock,citrus WHERE quantity > ${amount} AND stock.citrus_id = citrus.id AND citrus.name = '${fruit}';`, function (err, results) {
        if (err || results.rows.length == 0) {
            rollback(function () {
                console.log(`Transaction is rolled back! Maybe ${fruit}'s stock not enough?`);
            });
        } else {
            client.query(`UPDATE stock SET quantity = quantity-${amount} FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = '${fruit}';`, function (err, results) {
                if (err) {
                    rollback(function () {
                        console.log("Transaction is rolled back!");
                    });
                } else {
                    commit(function () {
                        console.log(`Transaction is committed! @SELL@ OK!!`);
                    });
                };
            });
        };
    })
});
}
// end function

//CSV reader
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        console.log('A row arrived: ', row);
        if (row[0] == 'SELL') {
            sell(row[1],row[2]);
        } else if (row[0] == 'BUY'){
            buy(row[1],row[2])
        } else {

        }
    })
    .on('end', function (data) {
        console.log('No more rows!');
    });

//

//Buy lemon (no need to check)

// begin(function(){
//     client.query("UPDATE stock SET quantity = quantity+20 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = 'lemon';",function(err,results){
//         if(err){
//             rollback(function(){
//                 console.log("Transaction is rolled back!");
//             });
//         }else{
//             commit(function(){
//                 console.log(`Transaction is committed! @BUY@ OK!!`);
//             });
//         }
//     });
// });

//Sell lemon (need to check quantity first)

// begin(function () {
//     client.query("SELECT * FROM stock,citrus WHERE quantity > 30 AND stock.citrus_id = citrus.id AND citrus.name = 'lemon';", function (err, results) {
//         if (err || results.rows.length == 0) {
//             rollback(function () {
//                 console.log("Transaction is rolled back! Maybe stock not enough?");
//             });
//         } else {
//             client.query("UPDATE stock SET quantity = quantity-30 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = 'lemon';", function (err, results) {
//                 if (err) {
//                     rollback(function () {
//                         console.log("Transaction is rolled back!");
//                     });
//                 } else {
//                     commit(function () {
//                         console.log(`Transaction is committed! @SELL@ OK!!`);
//                     });
//                 };
//             });
//         };
//     })
// });