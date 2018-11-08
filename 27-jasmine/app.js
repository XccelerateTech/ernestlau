const express = require('express');
const app = express();
const faker = require('faker');

app.get('/people', function(req, res){
    let obj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    };
    res.json({'person':  obj});
});


app.listen(8080);

// Export the app for the supertest to use.
module.exports.mainApp = app