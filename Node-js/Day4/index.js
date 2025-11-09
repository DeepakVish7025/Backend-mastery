const http = require('http');
const fs = require('fs');
const { Transform } = require('stream');
const server = http.createServer((req, res) => 
{
    // download a file in bad way : but agr es way se krnenge to badi file hone pem server crash ho kjayega : 
    // const file = fs.readFileSync('sample.txt'); 
    // res.end(file);
   

    // download a file in good way :
    // const fileStream = fs.createReadStream('sample.txt');
    // fileStream.pipe(res);

    // copy data from one file to another file : bad way cause take more much memory 
    // const file = fs.readFileSync('sample.txt');
    // fs.writeFileSync("output.txt", file)
    // res.end();


    // good way 
    // const readstream = fs.createReadStream("sample.txt");
    // const writestream = fs.createWriteStream("out.txt")
    // readstream.on("data",(chunk)=>
    // {
    //     console.log("chunk:", chunk);
    //     writestream.write(chunk);
    // });




    
    // transform stream in node js means to modify the data while reading or writing
    const readstream = fs.createReadStream("sample.txt");
    const writestream = fs.createWriteStream("out.txt");
    // we use for this transform module of stream
    const tramsformstream = new Transform({
        // transform(chunk, encoding, callback)
        transform(chunk, encoding, callback){
            const modifiedchunk = chunk.toString().toUpperCase().replaceAll(/streams/gi , "Modified Streams");
            callback(null, modifiedchunk);
        }
    });
    readstream.pipe(tramsformstream).pipe(writestream);

    res.end();





//    res.end('Hello, World!');
});



server.listen(3000, () =>
{
    console.log('Server is running on 3000');
});

