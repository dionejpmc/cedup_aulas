import express from "express";
import  { addUser, deleteUser, getUsers, updateUser } from "../controller/user.js";


const router = express.Router();


router.get("/getuser", getUsers);


router.post("/adduser", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)


export default router;