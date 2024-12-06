import {Schema,model} from"mongoose"

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
})

export const User = model('User',userSchema)