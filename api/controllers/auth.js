import User from "../models/User.js"
import bcrypt from  "bcryptjs"
import { createError } from "../utils/error.js";

export const register  = async(req,res,next) => {   
    try {
        //To Hash Password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password ,  salt);

        const newUser = new User({

            username: req.body.username,
            email: req.body.email,
            password: hash,

        });

        await newUser.save()
        res.status(200).send("User Has Been Created.")
        
        
    } catch (err) {
        next(err)
    }

}

//login function

export const login  = async(req,res,next) => {   
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404 , "User Not Found !"))

        const isPasswordCorrect =   await bcrypt.compare(req.body.password , user.password);
        if(!isPasswordCorrect) return next(createError(400 , "Wrong  Password or User Name !"));


        res.status(200).json(user);

    } catch (err) {
        next(err)
    }

}