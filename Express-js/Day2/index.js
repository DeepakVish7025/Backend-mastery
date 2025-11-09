import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
import userrouter from './router/userroute.js';




// app.get('/', (req, res) => 
// {
//     res.send('Hello, World!');
// })

app.use('/user', userrouter);



app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
})