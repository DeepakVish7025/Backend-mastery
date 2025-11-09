Definition:

os module Node.js ka built-in module hai jo Operating System (OS) related information aur utilities provide karta hai.
Isse hum apne system ke details (like CPU, memory, hostname, etc.) easily access kar sakte hain.

🔹 Import karne ka tarika:
const os = require('os');

🔹 Common Methods:
Method	Description
os.arch()	Returns CPU architecture (e.g. x64)
os.platform()	Returns OS platform (e.g. win32, linux, darwin)
os.type()	Returns OS name (e.g. Windows_NT)
os.hostname()	Returns computer name
os.totalmem()	Total memory (in bytes)
os.freemem()	Free memory (in bytes)
os.uptime()	System uptime (in seconds)
os.userInfo()	Returns current user info
os.cpus()	Returns CPU core details
os.networkInterfaces()	Returns network info
🔹 Example:
const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');
console.log('Hostname:', os.hostname());


Output Example:

Platform: win32
Architecture: x64
Total Memory: 8 GB
Free Memory: 3.5 GB
Hostname: Deepak-PC

🔹 In Short (Hinglish):

os module system se related info deta hai jaise —
CPU, memory, platform, hostname, aur network details.
Ye mostly system monitoring, logging, ya environment info ke liye use hota hai.