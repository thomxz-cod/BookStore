import express from "express"

const router = express.Router();

router.get("/register", async (req, res)=> {
    res.send("Vc esta no register fi");
})

router.get("/login", async (req, res)=> {
    res.send("Vc esta no login fi");
})

export default router