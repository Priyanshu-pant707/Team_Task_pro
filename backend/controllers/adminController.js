// admin controller logic will be here

const userModel = require("../models/userModel");


const getAllusers = async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
}






module.exports = getAllusers ;