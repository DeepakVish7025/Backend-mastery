// figma notes me node js working ka ye live working code part hai fo underwtandig 



// // how node js works interally how to run codes :

// const fs = require("fs");

// setImmediate(()=>
// {
//     console.log("hello i am from setImmediate")
// },0)

// setTimeout(() => {
//     console.log("hello i am from setTimeout")
// }, 0);


// console.log("hello i am from main code")


// // 1.console
// // 2.setTimeout
// // 3.setImmediate

// // if we remove console from above code then setImmediate will execute first then setTimeout 









process.env.UV_THREADPOOL_SIZE = require('os').cpus().length; 
// // Set this first!
// this is concept of thread pool in node js if we have task more than workers  then it will wait in queue until any of the worker is free to take new task
let start = Date.now();
const crypto = require("crypto"); 



crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});



console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);