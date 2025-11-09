// how to creat a http server usibg node js
const http = require('http');
const fs = require('fs');

// creast a server log file using fs module
const server = http.createServer((req, res) => 
{
    const log = `${new Date().toISOString()} - A New Request Made\n`;
    fs.appendFile('server.log', log, (err) =>
    {
        if (err)
        {
            console.log('Unable to append to server.log');
        }


    res.end('Request received');
    });
});

server.listen(3000, () =>
{
    console.log('Server is listening on port 3000');
});

