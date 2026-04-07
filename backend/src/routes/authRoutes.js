import express from "express"
import User from "../models/User.js";
import jwt from "jsonwebtoken";


const generateToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "15d" }
    );
};


const router = express.Router();

router.post("/register", async (req , res) => {
    try {
        const {username, email, password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message : "Todos os campos são obrigatorios!" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message : "A senha precisa ter pelo menos 6 caracteres!" })
        }

        if (username.length < 6) {
            return res.status(400).json({ message : "O nome de usuario precisa ter pelo menos 6 caracteres!" })
        }

        // Checar se existe
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({ message : "Este email já está cadastrado!" })
        }

        const existingUserName = await User.findOne({username})
        if(existingUserName){
            return res.status(400).json({ message : "Nome de usuario já cadastrado!" })
        }

        const profileImage = `https://api.dicebear.com/9.x/bottts/svg?seed=${username}`

        const user = new User({
            username,
            email,
            password,
            profileImage
        })

        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            token,
            user: {
                _id : user._id,
                username : user.username,
                email : user.email,
                profileImage : user.profileImage
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro no servidor" });
    }
})

router.get("/login", async (req , res) => {
    res.send("Essa é a rota de login");
})

export default router
