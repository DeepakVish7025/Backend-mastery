import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());

// global middleware
function sayhimiddleware(req, res, next)
{
    console.log('Hello from Middleware');
    next();
}

// app.use(sayhimiddleware);

// app.get('/', (req, res) => 
// {
//     res.send('Hello, World!');
// })

// specific route middleware: means it will run only for this route
app.get('/', sayhimiddleware, (req, res) => 
{
    res.send('Hello, World!');
})









app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
})