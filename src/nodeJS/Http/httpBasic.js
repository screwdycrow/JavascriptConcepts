/**
 * Created by Dimitris on 11/9/2017.
 */

//a dead simple example on http
let http = require('http');


http.createServer(function (req, res) {
//we set the response header on "textplain, and status code 200
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //then we append to the body the text we want
    res.end('Hello world \n');
}).listen(1337, '127.0.0.1');
//listen on 1337 on localhost  ( http://localhost:1337)