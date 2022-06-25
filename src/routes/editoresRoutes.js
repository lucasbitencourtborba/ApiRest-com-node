import EditorController from "../controllers/editoresController.js"
import express from "express"

const router = express.Router()

router 
    .get('/editoras', EditorController.obterEditores)
    .get('/editoras/:id', EditorController.obterEditoresPorId)
    .post('/editoras', EditorController.adicionarEditora)
    .put('/editoras/:id', EditorController.modificarEditor)
    .delete('/editoras/:id', EditorController.excluirEditor)

export default router
