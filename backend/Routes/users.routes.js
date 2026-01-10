import { Router } from "express";
import {
  createUsers,
  readUsers,
  updateUsers,
  deleteUsers,
} from "../Controllers/users.controller.js";

const router = Router();

router.post("/", createUsers);
router.get("/", readUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
