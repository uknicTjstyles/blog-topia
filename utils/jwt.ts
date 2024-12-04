import jwt from 'jsonwebtoken';
import { mongoDbConfig } from '@/lib/mongoDb/config';




const JWT_SECRET = mongoDbConfig.JWT_SECRET;


export const generateToken = (payload:object, expiresIn:string): string => {
    if(!JWT_SECRET){
        throw new Error('JWT secret is not defined in environment variables');
    }
    return jwt.sign(payload, JWT_SECRET, {expiresIn});
}


export const verifyToken =  <T>(token: string): T => {
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return jwt.verify(token, JWT_SECRET) as T;
  };