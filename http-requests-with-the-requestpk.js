const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
        throw err;
       })
       .on('response', function(response) {
        console.log(response.statusMessage, response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));