const url = 'https://jsonplaceholder.typicode.com/posts';
const fetch = require("node-fetch");
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))