import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';


app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    // how to set cookies in express js
    res.cookie('name', 'deepak kumar',
        {
            // Expiry time also can set 
            // maxAge: 900000,
            httpOnly: true
        
        })
    res.send('Hello, World!');
});

// now we creat a product route and give response which show only when user have same coooke that is deepak kumar 

app.get('/product', (req, res) => {
    //   now access the cookie 
    // console.log(req.cookies); it give undefined because we have not use cookie parser middleware
    
    // right way to access cookie : as a string so we convert it in object for use so usee cookie parserr 
    const { name } = req.cookies;
    if (name === 'deepak kumar') 
    {
        res.send('This is product page');
    }

    res.send('Please hit the cookie first for access product page');

});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


















// signed cookues concept 


// import express from 'express';
// import cookieParser from 'cookie-parser';

// const app = express();
// app.use(cookieParser("secert"))

// app.get('/', (req, res) => {
//   // !. How to set it
//   res.cookie("userId","99" , {
//     maxAge:1000 * 60 * 60 * 24,
//     signed:true
//   })
//     res.send('Hello World');
// });

// app.get("/product" , (req , res)=>{
// console.log("Cookies" , req.cookies);
// console.log("Signed Cookies" , req.signedCookies)

// // t

// if(req.cookies.name && req.cookies.name ==="express"){

//   res.status(200).send({
//     id:1,
//     name:"Item-01",
//     price:"$100"
//   })
// }

// res.status(403).send("you are not authorized to view this page")

// })



// app.listen(8080 , ()=>{
//     console.log('Server is running on port http://localhost:8080');
// })

//   // console.log(req.cookies) undefined
//   // console.log(req.headers.cookie)
//   // console.log('Cookies: ', req.cookies)
//   //  && and ??