import bcrypt from "bcrypt"
import { User } from "../../db/models/user.model.js";

export const login = async (req,res) => {

}
export const register = async (req,res) => {
    const {username,password} = req.body;

    try {
        const hashed = await bcrypt.hash(password,10)
        const user = await User.create({
            username,password
        })
    } catch (error) {
        
    }
}
