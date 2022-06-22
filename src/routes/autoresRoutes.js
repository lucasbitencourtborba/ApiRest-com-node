import AutorController from "../controllers/autoresController.js";
import express from "express";

const router = express.Router();

router
    .get("/autores", AutorController.obterAutores)
    .get("/autores/:id", AutorController.obterAutoresPorId)
    .post("/autores", AutorController.adicionarAutor)
    .put("/autores/:id", AutorController.modificarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

export default router;