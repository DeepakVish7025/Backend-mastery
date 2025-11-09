// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOG`OUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED


// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered




const EventEmitter = require('events');
const fs = require('fs');
const emitter = new EventEmitter();


// event count tracker

const eventCount = {
    LOGIN: 0,
    LOGOUT: 0,
    PURCHASE: 0,
    PROFILE_UPDATE: 0
};
 

const logfile = 'event_log.json';
// agr file to file ko read krkr file ke andr bhi event count ki value ko update krna hoga
if(fs.existsSync(logfile))
{
    const data = fs.readFileSync(logfile,"utf-8");
    Object.assign(eventCount , JSON.parse(data));

}
// aur count value ko file me save krne k liye function bnaenge
function saveEventCount()
{
    fs.writeFileSync(logfile , JSON.stringify(eventCount , null , 2));
}


// creat event : LOGIN , LOGOUT , PURCHASE , PROFILE_UPDATE
emitter.on("LOGIN" , (username)=>
{
    eventCount.LOGIN += 1;
    console.log(`${username} has logged in.`);
    saveEventCount();
})


emitter.on("LOGOUT" , (username)=>
{
    eventCount.LOGOUT += 1;
    console.log(`${username} has logged out.`);
    saveEventCount();
})


emitter.on("PURCHASE" , (username , item)=>
{
    eventCount.PURCHASE += 1;
    console.log(`${username} has purchased ${item}.`);
    saveEventCount();

})

emitter.on("PROFILE_UPDATE" , (username)=>
{
    eventCount.PROFILE_UPDATE += 1;
    console.log(`${username} has updated their profile.`);
    saveEventCount();
})


emitter.emit("LOGIN" , "Deepak");
emitter.emit("PURCHASE" , "Deepak" , "Laptop");
emitter.emit("PROFILE_UPDATE" , "Deepak"," New Profile Picture");
emitter.emit("LOGOUT" , "Deepak");


// kaun sa kitni bar trigger hua track krnsa 
emitter.on("SUMMARY" , ()=>{

    console.log("\nEvent Summary Report:");
    console.log(`LOGIN events: ${eventCount.LOGIN}`);
    console.log(`LOGOUT events: ${eventCount.LOGOUT}`);
    console.log(`PURCHASE events: ${eventCount.PURCHASE}`);
    console.log(`PROFILE_UPDATE events: ${eventCount.PROFILE_UPDATE}`);

})
emitter.emit("SUMMARY");



