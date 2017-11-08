/**
 * Created by Dimitris on 11/9/2017.
 */
let fs = require('fs');
let zlib = require('zlib');

//if the file is less than the buffers size it will loaad the whole text on once, otherwise, it will be delvered
//with chuncks, so the readable.on will be executed as many times as the number of chuncks is is. by using smaller buffers
//we achieve less demands regarding RAM

let readable = fs.createReadStream(__dirname + '/lorepispum.txt');
//we can also specify how much the buffer size will be like that
let readable2 = fs.createReadStream(__dirname + '/lorepispum.txt',{
    highWaterMark: 16*1024 //16 kb
});
let gzip = zlib.createGzip(); //creates a gzip object which is readable stream;

// a writable stream which will write on the copy.txt;
let writable = fs.createWriteStream(__dirname+'/copy.txt');
let writable2 = fs.createWriteStream(__dirname+'/copy2.txt');
let compress = fs.createWriteStream(__dirname+'/copy.txt.gz');


//in our case, two streams ;P since the max size is 65536 b and my file is 35140 b
readable.on('data',function (chunk) {
    console.log('readable',chunk.length);
});
//more times - more chunks ;)
readable2.on('data',function (chunk) {
    console.log('readable2',chunk.length);
    //copy the chunk on the copy.txt
    writable.write(chunk);
});

//now pipes, a pipe, takes a readable buffer and "pipes" its contents to a writable,
readable2.pipe(writable2);
//the gzip will also be a readable stream so we will pipe it to our writable !!!
readable2.pipe(gzip).pipe(compress);
//and yaaaay we g-ziped our string onto the copy.txt.gz