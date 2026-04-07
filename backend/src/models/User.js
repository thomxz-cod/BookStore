import mongoose from "mongoose";

// hash
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    // jwt.sign({userId})
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "15d" }
    );
}


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,    // deixa obrigatorio ter userName
        unique : true,      // so pode ter um unico userName
        minLength : 6       // poe um limite minimo de caracteres
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    profileImage : {
        type : String,
        default : ""
    }
})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('User', userSchema)  // melhora a forma de exportar 

export default User
