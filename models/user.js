import mongoose from "mongoose";



let userSchema = mongoose.Schema({
            name : String,
            email : String,
            phone : Number
        })

        let User = mongoose.model("users",userSchema)


export default User