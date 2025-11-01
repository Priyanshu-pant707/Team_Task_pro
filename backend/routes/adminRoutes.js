const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { getAllusers, deleteUser } = require("../controllers/adminController");

router.get("/users", verifyToken, roleMiddleware(["admin"]), getAllusers);
router.delete("/delete/:username", verifyToken, roleMiddleware(["admin"]), deleteUser);
module.exports = router;
