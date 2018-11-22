const fs = require('fs');
const CSVReadableStream = require('csv-reader');
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "Chung",
        user: "admin",
        password: "test",
        port: 5432
    }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function commands() {
    let rows = [];

    inputStream.pipe(CSVReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
        })
        .on('end', async (data) => {
            knex.transaction(async function(trx) {
                for (let row of rows) {
                    let [action, name, quanity] = row;
                    if (action === 'SELL') {
                        let result = await knex.select("quantity").from("stock")
                                    .innerJoin("citrus","stock.citrus_id","citrus.id")
                                    .where("citrus.name" , name).groupBy("stock.quantity");
                                    if (result[0].quantity < quanity) {
                                        console.log(`ERROR! ${name} not enough`)
                                        throw new Error(`Not enough for for ${name}!`);
                                    }
                    }
                    if (action === 'BUY') {
                        await knex.select("quantity").from("stock")
                        .whereIn("citrus_id", function(){
                        this.select("id").from("citrus").where("name",name);
                        }).increment('quantity', quanity).then(trx.commit).catch(trx.rollback)
                        console.log(`You have bought ${quanity} ${name}'s!`);
                    } else{
                        await knex.select("quantity").from("stock")
                        .whereIn("citrus_id", function(){
                        this.select("id").from("citrus").where("name",name);
                        }).decrement('quantity', quanity).then(trx.commit).catch(trx.rollback);
                        console.log(`${quanity} ${name} sold!`);
                    }
                
                }
            });
        });
}








// try {
//     for (let row of rows) {
//         let [action, name, quanity] = row;
//         if (action === 'SELL') {
//             let result = await knex.select("quantity").from("stock")
//             .innerJoin("citrus","stock.citrus_id","citrus.id")
//             .where("citrus.name" , [name]).groupBy("stock.quantity")
//             if (result.quanity < quanity) {
//                 throw new Error(`Not enough for for ${name}!`);
//             }

//         }
//         if (action === 'BUY') { //buy
//             let result = await knex.select("quantity").from("stock")
//             .whereIn("citrus_id", function(){
//                 this.select("id").from("citrus").where("name",[name]);
//             }).increment('quantity', [quanity])
//             console.log(`You have bought ${quanity} ${name}'s!`);
//         } else { //sell
//             let result = await knex.select("quantity").from("stock")
//             .whereIn("citrus_id", function(){
//                 this.select("id").from("citrus").where("name",[name]);
//             }).decrement('quantity', [quanity])
//             console.log(`${quanity} ${name} sold!`);
//         }
//     }
// } catch (e) {
//     console.log(e);

// }
//         });

// }

commands();

/* 
let query = knex.select("quantity").from("stock")
.whereIn("citrus_id", function(){
    this.select("id").from("citrus").where("name","lemon");
}).increment('quantity', 10)

query.then(async (rows)=>{
    console.log(await rows)
}).catch((error)=>{
    console.log(error);
});
*/
process.on('exit', function(code){
    return console.log(`About to exit with code ${code}`)
})