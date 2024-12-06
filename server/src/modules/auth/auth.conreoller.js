import bcrypt from "bcrypt"
import { User } from "../../db/models/user.model.js";
import jwt from "jsonwebtoken"

export const login = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email}).select("+password")
        if(!user){
            return res.status(400).send({
                message:"Invalid credntials"
            })
        }

        const cheack = await bcrypt.compare(password,user.password)

        if(!cheack){
            return res.status(404).send({
                message:"Invalid credntials"
            })
        }
        const token = await jwt.sign({id:user.id},process.env.JWT_SECRET)
        return res.status(201).send({
            message:"login user",
            user,
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message:"something wan't wrong"
        })

    }
    

}
export const register = async (req,res) => {
    const {email,password} = req.body;

    try {
        const hashed = await bcrypt.hash(password,10)
        const user = await User.create({
            email,password:hashed,
        })
        res.status(201).send({
            message:"new user",
            user
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message:"something wan't wrong"
        })
    }
}
