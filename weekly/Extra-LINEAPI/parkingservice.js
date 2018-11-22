var axios = require('axios')

// async function checkParking(place){
//     try{
//         let res1 = await axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy?vehicleTypes=private&data=info")
//         // let parkingID = 
//         console.log(res1.data.results.length)
//         // let parkingID = await 
//         // let res2 = await axios.get(`http://example2.com?key1=${res1.key2}`)
//         // return res2.key2;
//     }catch(err){
//         console.log(err);
//         throw err;
//     }
// }

async function checkParking(){
    try{
        let res1 = await axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy?data=info&vehicleTypes=privateCar&carparkIds=tdcp1")
        return await res1.data.results[0].displayAddress
        // let res2 = await axios.get(`http://example2.com?key1=${res1.key2}`)
        // return res2.key2;
    }catch(err){
        console.log(err);
        throw err;
    }
}

module.exports = checkParking;

checkParking()


// restaurants = 
//   [
//     {"restaurant" : { "name" : "McDonald's", "food" : "burgerch" }},
//     {"restaurant" : { "name" : "KFC",        "food" : "chicken" }},
//     {"restaurant" : { "name" : "Pizza Hut",  "food" : "chicken" }}
//   ];



// This:

// var okgoogle = "burger"
// var txt=new RegExp("^((?!" + okgoogle +").)*$");

// var result = restaurants.filter(function (chain) {
//     return !txt.test(chain.restaurant.food);
// });

// console.log(result)