class User {
    constructor(option) {
        this.name = option.name
        this.email = option.email
        this.birth = option.dob.date
    }
}

function randomUser() {
    var http = new XMLHttpRequest(); // Call the AJAX here, And get the Data
    http.open("GET","https://randomuser.me/api/?results=5",true);
    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
          return;
        } else if (http.status == 200) {
                let parsedObj = JSON.parse(http.responseText);
                let person = parsedObj.results.map(function(user){
                    return new User(user)
                })
                console.log(person)

                //-----Using Loop-----//
                // for (i = 0; i < 5; i++) {
                //     let person = new User(parsedObj.results[i]);
                //     cconsole.log(person);
                // }

        } else {
          console.log("error occurred" + http.status);
        }
      };
     
     //   callback(data); // Return the Data by calling callback with the resulting data
     
     http.send();
     
     }
     
randomUser();