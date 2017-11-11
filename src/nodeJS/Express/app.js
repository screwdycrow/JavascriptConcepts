/**
 * Created by Dimitris on 11/11/2017.
 */
let express = require('express');
let app = express();

let port = process.env.PORT || 3000; //if there is an enviroment variable use this either 3000

//this is a middleware that loads static files like js and css, i put them on the public folder, although express will load
//them when the /assets will be requested
app.use('/assets',express.static(__dirname+'/public'));
//verb get,we could have a verb post or sth else
app.get('/',function (req,res) {
    //express will take care of the content based of the text
    res.send('<html> <head></head> <h1>hello!!!!! </h1> <body></body></html>');
});

app.get('/test',function (req,res) {
    //json converts the obj to json :P
   res.json({firstname:'john', lastname:'snow'});
});

// routes and paramters!
app.get('/person/:id',function (req,res) {
    //json converts the obj to json :P
    res.send(` <html><head><link href="/assets/style.css" rel="stylesheet" type="text/css"> </head><body> <h1> person : ${req.params.id} </h1></body></html>`)
});

app.listen(port);