// admin controller logic will be here

const userModel = require("../models/userModel");


const getAllusers = async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
}

const deleteUser = async (req, res) => {
  try {
   

    // Check if user exists
    const deletedUser = await userModel.findOneAndDelete({username:req.params.username} );

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: `User '${username}' deleted successfully`,
      deletedUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting user",
      error: err.message,
    });
  }
};






module.exports =
{
    getAllusers,
    deleteUser

} ;