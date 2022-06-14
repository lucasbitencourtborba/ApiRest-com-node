import LivroController from "../controllers/livrosController.js";
import express from "express";

const router = express.Router();

router
    .get("/livros", LivroController.obterLivros)
    .post("/livros", LivroController.adicionarLivro)

export default router;