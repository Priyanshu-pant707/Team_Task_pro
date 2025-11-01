//writing the login and signup logic


const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



//function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    }, "SecretKey", { expiresIn: "1d" });
}



//signup controller


const signup = async (req, res) => {
    const { username, email, password, role } = req.body;

    const newUser = await userModel.findOne({ email });

    if (newUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        role
    });

    res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user)
    });


}



//login controller

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user)
    });


}

module.exports = { signup, login };