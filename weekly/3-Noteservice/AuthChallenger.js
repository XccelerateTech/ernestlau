module.exports = function AuthChallenger(knex){
    return function (username, password, callback){
        console.log("Inputed username is: " + username);
        console.log("Inputed password is: " + password);
        let query = knex.select('username')
            .from('users')
            .where('username', username)
            .where('password', password);

            query.then((rows)=>{
                console.log(rows) //show matched result in a array
                if(rows.length ===1){
                    callback(null, true);

                    //we have found the user with this username and password.

                } else {
                    callback (null, false);
                    //no such user....
                }
            }).catch((err)=>{
                console.log(err);
            })
    }
}

// Knex query will return a Promise, and you need callback & then()
// return callback(null, true/false) if match or not