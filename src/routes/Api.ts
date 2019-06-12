import { Router } from "express";
import HomeController from "../controllers/Api/Home";
import RegisterController from "../controllers/Api/Auth/Register";

const router = Router();

router.get("/", HomeController.index);

router.post("/auth/register", RegisterController.perform);

export default router;
