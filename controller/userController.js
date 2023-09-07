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
export const deleteUser = (req, res, next)=>{

}
export const getUser = (req, res, next)=>{

}
export const subscribeUser = (req, res, next)=>{

}
export const unsubscribeUser = (req, res, next)=>{

}
export const likeVideo = (req, res, next)=>{

}
export const dislikeVideo = (req, res, next)=>{

}