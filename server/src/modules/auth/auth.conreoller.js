import bcrypt from "bcrypt"

export const login = async (req,res) => {

}
export const register = async (req,res) => {
    const {username,password} = req.body;

    try {
        const hashed = await bcrypt.hash(password,10)
    } catch (error) {
        
    }
}
