import { createError } from "../utils/error.js";    
import jwt from "jsonwebtoken";

export const verifyToken = (req , res, next ) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401 , "You are Not Authenticated"))
    }

    jwt.verify(token , process.env.JWT , (err , user) => {
        if(err) return next(createError(403 , "Token is Not Valid"));
        req.user = user;
        next()
    })
}



export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.id === req.params.id || req.user.isadmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  
  
  
  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res,next,  () => {
      if (req.user.isadmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };