import { Router } from "express";
const router = Router();

import {login , logOut, register} from "../controllers/auth.controller.js"


router.post("/register" , register);
router.post("/login" , login);
router.post("/logout" , logOut);


export default router;