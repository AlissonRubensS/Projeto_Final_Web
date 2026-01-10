import { Router } from "express";
import {
  createItens,
  readItens,
  updateItens,
  deleteItens,
} from "../Controllers/itens.controller.js";

const router = Router();

router.post("/", createItens);
router.get("/", readItens);
router.put("/:id", updateItens);
router.delete("/:id", deleteItens);

export default router;
