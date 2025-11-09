// router in express js

import {Router} from 'express';

const userrouter = Router();


userrouter.get("/creat-user", (req, res)=>
{
    res.send("User Created Successfully");
})

userrouter.get("/get-user", (req, res)=>
{
    res.send("User Data Retrieved Successfully");
})

userrouter.get("/getuserbyid", (req, res)=>
{
    res.send("User Data Retrieved by ID Successfully");
})

export default userrouter;