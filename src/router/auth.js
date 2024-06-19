import { Router } from "express";
import { getAllUser, getDetailUser, logOutUser, singIn, singUp,updateUser } from "../controllers/auth.js";


const routerAuth = Router();
routerAuth.post("/singup", singUp);
routerAuth.post("/singin", singIn);
routerAuth.post("/logout", logOutUser);
routerAuth.put("/updateUser/:id",updateUser)
routerAuth.get("/all",getAllUser)
routerAuth.get("/getDetailUser/:id", getDetailUser)


export default routerAuth;
