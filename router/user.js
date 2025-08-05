const express = require("express");
const {getAllUsers , getUserById , createUser , updateUser , deleteUser} = require("../controller/user");

const router = express.Router();

router.get("/users",getAllUsers);  //http://localhost:3000/user/users

router.get("/getUserById/:id",getUserById); // http://localhost:3000/user/getUserById

router.post("/users",createUser); // http://localhost:3000/user/users

router.put("/users/:id",updateUser);

router.delete("/users/:id",deleteUser);

module.exports = router;