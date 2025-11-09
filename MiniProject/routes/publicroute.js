import express from 'express';
import { generateToken } from '../utils/tokenutil.js';

const Router = express.Router();





// in this we creat two route one for token generation and one for home page

Router.get('/generate-token', (req, res) => 
{
    const token = generateToken();
    res.status(200).send({
        message:"Token generated successfully save it for future use",
        token:token

    })
})



Router.get('/', (req, res) =>{
    res.status(200).send("Welcome to the Home Page")
});

export default Router;