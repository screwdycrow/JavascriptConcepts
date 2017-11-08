/**
 * Created by Dimitris on 11/8/2017.
 */

let fs = require('fs');
//read a file syncronously, we dont wont that cause if some other users
//are trying to access the same code they will be locked...
let greet = fs.readFileSync(__dirname + '/hello.txt', 'utf8');
console.log(greet);


/*
 a js design pattern is an error-first callback
 basically the only thing this does is to put the error arg first
 in the callback
 */

//this does the same asychronousely, just use this, notice the first-error callback
let greet2 = fs.readFile(__dirname + '/hello.txt', 'utf8', (err, data) => {
        console.log(data);

    }
);

