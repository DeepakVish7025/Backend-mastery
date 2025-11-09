

// events in node js : 


// Node.js me events ka matlab hota hai — jab system me koi action ya signal hota hai (jaise request aayi, file read hui, data mila).
// Ye sab handle karne ke liye Node.js me EventEmitter class hoti hai (from events module).

// Example:

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', () => console.log('Hello!'));
// emitter.emit('greet');


// 👉 on() = event sunna (listen karna)
// 👉 emit() = event chalana (trigger karna)


const EventEmitter = require('events');

// event emitter object create karte hain so ak instance banate hain EventEmitter class ka
const emitter = new EventEmitter();

// emit method and on method ka use karte hain

// creat a greet fun using emit method and on method
// emitter.on("GREET",()=>
// {
//     console.log("Hello World");
// })

// emitter.emit("GREET");


// now we take an argument in grreet fun :

// emitter.on("GREET",(firstname , lastname )=>
// {
//     console.log(`Hello World ${firstname} ${lastname}`);
// })

// emitter.emit("GREET" , "Deepak" , " Vishwakarma");

// correct method to give arguments 

emitter.on("GREET",(args)=>
{
   console.log(`Hello World ${args.firstname} ${args.lastname}`);
})
emitter.emit("GREET" , {firstname : "Deepak" , lastname : "Vishwakarma"});