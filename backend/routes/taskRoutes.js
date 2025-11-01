const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { createTask,getTask } = require("../controllers/taskController");

router.post("/", verifyToken, roleMiddleware(["manager", "admin"]), createTask);
router.get("/", verifyToken, getTask);

module.exports = router;
