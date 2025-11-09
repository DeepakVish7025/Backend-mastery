import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



// ye file path batayega kaha pe file creat krni hai 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// isase kya hai kaun kab kaun sa request kr rha sb maintain higa yaha par 

const logmiddleware = (req, res, next) => 
{
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    const logfile = path.join(__dirname, '../logs', 'access.log');

    fs.appendFile(logfile, log, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        }
    });
    next();
}

export default logmiddleware;