const express = require ("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");


router.get("/", userControllers.usersList); 

router.get("/newUser", userControllers.userForm);
router.post("/newUser", userControllers.newUser);

router.get("/editUser/:id", userControllers.editForm);
router.put("/editUser/:id", userControllers.editUser);

router.delete("/delete/:id", userControllers.deleteUser);

router.get("/detail/:id", userControllers.userDetail); 


module.exports = router; 