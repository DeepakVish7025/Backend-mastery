import express from 'express';
const app = express();
const PORT = 3000;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import publicRoute from './routes/publicroute.js';
import privateRoute from './routes/privateroute.js';
import logmiddleware from './middleware/loginfo.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// its creat folder logs if not present
if(!fs.existsSync(path.join(__dirname, "logs")))
{
    fs.mkdirSync( path.join(__dirname, "logs") );
}

app.use(express.json());

// global logging middleware
app.use(logmiddleware)

app.use('/public', publicRoute )
app.use('/private', privateRoute )


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

