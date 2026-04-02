const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    
    const user = new User({ name, email, password});

    await user.save();

    res.json({ message: "User registered"});
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password});

    if (!user){
        return res.status(404).json({ message: "Invalid Credentials"});
    }
    
    res.json({ message: "Login Succesfull", user});
});

module.exports = router;