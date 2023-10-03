const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

//GET ALL USER
router.get("/", middlewareController.verifyToken, userController.getAllUser);

//DELETE USER
//v1/user/'id'
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;
