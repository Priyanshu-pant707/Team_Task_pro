const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const roleMiddleware  = require("../middlewares/roleMiddleware");
const getAllusers  = require("../controllers/adminController");

router.get("/users", verifyToken, roleMiddleware (["admin"]), getAllusers);

module.exports = router;
