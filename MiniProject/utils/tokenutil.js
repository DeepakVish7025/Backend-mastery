import crypto from 'crypto';

export const generateToken = () => 
{
    return crypto.randomBytes(16).toString('hex');
}

export const verifyToken = (token)=>
{
    // In a real application, you would verify the token properly
    return token === "token";
    return token.length === 32;
    
}