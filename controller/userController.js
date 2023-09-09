import { createError } from "../error.js"
import User from "../models/User.js"

export const updateUser = async (req, res, next)=>{
    if(req.params.id === req.user.id){

        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
            {
                $set:req.body,
            },
            {
               new: true

            }) 
            res.status(200).json(updateUser)
        }catch (error) {
            next(error)
        }

    }else{
        return next(createError(403, "you can only update your account"))
    }
}
export const deleteUser = async (req, res, next)=>{
    if(req.params.id === req.user.id){

        try {
            await User.findByIdAndDelete(
                req.params.id,
           ); 
            res.status(200).json("User has been deleted")
        }catch (error) {
            next(error)
        }

    }else{
        return next(createError(403, "you can only delete your account"))
    }
}
export const getUser = async (req, res, next)=>{
try {
    const getUser = await User.findById(req.params.id)
    res.status(200).json(getUser)  
} catch (error) {
    next(error)
}
}
export const subscribeUser = async (req, res, next)=>{
try {
    await User.findById(req.user.id,{
        $push: {subscribeUser: req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
        $inc: {subscriber: 1},
    });
    res.status(200).json("subscription successfully")
} catch (error) {
    next(error)
}
}
export const unsubscribeUser = async (req, res, next)=>{
try {
    try {
        await User.findById(req.user.id,{
            $pull: {subscribeUser: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc: {subscriber: -1},
        });
        res.status(200).json("Unsubscription successfully")
    } catch (error) {
        next(error)
    }   
} catch (error) {
    next(error)
}
}
export const likeVideo = async (req, res, next)=>{
try {
    
} catch (error) {
    next(error)
}
}
export const dislikeVideo = async (req, res, next)=>{
try {
    
} catch (error) {
    next(error)
}
}