var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    //do it asycronously, that makes if multiple people are trying to access the same file and this file is large we will have
    //performance issues
   // var html = fs.readFileSync(__dirname + '/index.htm'); /
    //we will check the url and respond with different things.
    switch (req.url){
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/index.htm').pipe(res);
            break;
        case '/api':
            let json = JSON.stringify({title:'Lord of the rings',rating:10});
            res.end(json);
            break;
        default:
            //if the url is not on our switch then send an error response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('the page doesnt exist');

    }

    //the Proper way with streams which will scale much better!!!
    //res is a writable stream after all that sends the stream via tcp...
   // res.end(html);
    
}).listen(1337, '127.0.0.1');