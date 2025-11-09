import express from 'express';
const Router = express.Router();
import authmiddleware from '../middleware/auth.js';

Router.get('/dashboard', authmiddleware, (req, res)=>
    {
        res.status(200).send(`Welcome to the Dashboard, ${req.user.name}`);

    } )

    export default Router;

