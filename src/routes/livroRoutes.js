import LivroController from "../controllers/livrosController.js";
import express from "express";

const router = express.Router();

router
    .get("/livros", LivroController.obterLivros)
    .get("/livros/:id", LivroController.obterLivrosPorId)
    .get("/livros/busca", LivroController.listarLivrosPorEditora)
    .post("/livros", LivroController.adicionarLivro)
    .put("/livros/:id", LivroController.modificarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

    export default router;