var $ = require('jquery');

function takeLong() {
    console.log($.get('http://api.url.com'));
}

function beQuick() {
    console.log('I was called afterwards');
}

takeLong();
beQuick();