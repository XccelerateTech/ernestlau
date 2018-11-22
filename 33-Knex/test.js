const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "Chung",
        user: "admin",
        password: "test",
        port: 5432
    }
});

// var sth1 = knex.select("*").from("citrus").innerJoin("stock","stock.citrus_id","=","citrus.id").where("citrus.name","lemon");

// sth1.then(async (rows)=>{
//     console.log(await rows)
//     // You can access the fetched row here.
// }).catch((error)=>{
//     console.log(error);
//     //Handle the error here.
// });

// var sth2 = knex.insert({name: "pineapple"}).into("citrus");

// sth2.then((rows)=>{
//     console.log(rows);
// }).catch((e)=>{
//     console.log(e);
// })

// var sth3 = knex("citrus").where("name", "pineapple").delete();
// sth3.then();

