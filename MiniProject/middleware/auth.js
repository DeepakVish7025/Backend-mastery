import { verifyToken } from "../utils/tokenutil.js";

const authmiddleware = (req, res, next) => 
{
   const token = req.headers['authorization'];
   if(token && verifyToken(token))
   {
        req.user =
        {
            id: 1,
            name: "Deepak "
        }
        next();
   }
}

export default authmiddleware;