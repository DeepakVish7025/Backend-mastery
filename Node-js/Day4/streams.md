Node.js me Streams ka use large data ko chhote-chhote parts (chunks) me process karne ke liye hota hai — bina poora data memory me load kiye.
Ye fast aur memory-efficient hota hai.

🔹 Types of Streams

Readable Stream → Data read karne ke liye (ex: fs.createReadStream())

Writable Stream → Data likhne ke liye (ex: fs.createWriteStream())

Duplex Stream → Dono (read + write) kar sakta hai (ex: net.Socket)

Transform Stream → Data ko modify karte hue pass karta hai (ex: zlib compression)

🔹 Example (File Read + Write Stream)
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

// Pipe connects read → write
readStream.pipe(writeStream);

console.log('Data copied successfully!');


👉 Yahaan pipe() method data ko streaming way me ek file se dusri file me transfer karta hai.

🔹 Why Streams?

Large file handle karne me fast aur memory-efficient

Non-blocking (async)

Used in file operations, network requests, and audio/video streaming.









treams Internally Kaise Kaam Karte Hain?

Node.js me Streams basically EventEmitter par based hote hain.
Matlab — ye events fire karte hain jaise:

data → jab naya chunk aata hai

end → jab poora data read ho jata hai

error → jab koi error hoti hai

finish → jab likhna complete hota hai

🔹 Step-by-Step Working (Readable Stream Example)
Example Code:
const fs = require('fs');
const readStream = fs.createReadStream('file.txt');

readStream.on('data', (chunk) => {
  console.log('New chunk:', chunk.toString());
});

readStream.on('end', () => {
  console.log('File reading done!');
});

Internal Process 🔍

File open hoti hai:
fs.createReadStream() OS-level file handle open karta hai.

Buffer allocate hota hai:
Node ek internal buffer (default ~64KB) banata hai jisme file ka ek part load hota hai.

Chunk emit hota hai:
Jab buffer fill hota hai, stream ek data event emit karta hai aur tumhe ek chunk deta hai.

Flow Control:
Agar tum data fast process nahi kar pa rahe ho, Node stream ko pause kar deta hai automatically.
Jab tum ready ho jaate ho, wo fir se resume karta hai.

End event:
Jab pura file read ho jaata hai → end event fire hota hai.

🔹 Writable Stream Internally
const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello Stream!');
writeStream.end();


Write request queue hoti hai
Node data ko ek internal queue me store karta hai.

OS ko write operation bheja jaata hai (asynchronously).

Jab likhna khatam hota hai → drain aur finish events trigger hote hain.

🔹 Pipe Working Internally
readStream.pipe(writeStream);


pipe() basically internally data event ko listen karta hai.

Jab bhi readStream me data event aata hai → wo us chunk ko writeStream.write() me bhej deta hai.

Jab readStream ka end aata hai → writeStream.end() call hota hai automatically.

So:
pipe() = connect karta hai source (Readable) ko destination (Writable) se without manual event handling.

🔹 Summary Table
Stream Type	Example	Emits Events	Internal Role
Readable	fs.createReadStream()	data, end	Read data in chunks
Writable	fs.createWriteStream()	drain, finish	Write data in chunks
Duplex	net.Socket	Both	Read + Write
Transform	zlib.createGzip()	Both + transform	Modify data on the fly
🧠 Simple Analogy:

Imagine ek pipeline:

Tap (Readable) → paani chhote flow me deta hai (chunks)

Pipe (Transform) → paani filter karta hai

Bucket (Writable) → paani collect karta hai

Node.js streams bilkul isi tarah asynchronously data pass karte hain — bina saara data ek baar me load kiye.