import { Router } from "express";
import { loginController } from "../controllers/auth/loginController";
import { tokenController } from "../controllers/auth/tokenController";

const router = Router();

router.get("/login", loginController);
router.get("/token", tokenController);


export { router as loginRouter }