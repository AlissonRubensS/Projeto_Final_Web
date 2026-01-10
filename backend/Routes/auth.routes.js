import { Router } from "express";
import {
  Login,
  VerifyAuth,
  updatePassword,
} from "../Controllers/auth.controller.js";

const router = Router();

router.post("/", Login);
router.get("/", VerifyAuth);
router.put("/:id", updatePassword);

export default router;
