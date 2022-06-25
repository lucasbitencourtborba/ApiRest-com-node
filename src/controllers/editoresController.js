import mongoose from "mongoose";
import editores from "../models/Editora.js";

class EditorController {
    static obterEditores = (req, res) => {
        editores.find((err, editores) => {
            res.status(200).json(editores)
        })
    }

    static obterEditoresPorId = (req, res) => {
        const id = req.params.id

        editores.findById(id, (err, editores) =>{
            if(err) {
                res.status(400).send({message: `${err.message} - Impossível encontrar ID espcificado`})
            } else {
                res.status(200).send(editores)
            }
        })
    }

    static adicionarEditora = (req, res) => {
        let Editora = new editores(req.body);

        Editora.save((err => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Editor`})
            } else {
                res.status(201).send(Editora.toJSON())
            }
        }))
    }

    static modificarEditor = (req, res) => {
        const id = req.params.id

        editores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Editor atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${err.message} - Id não encontrado`})
            }
        })
    }

    static excluirEditor = (req, res) => {
        const id = req.params.id

        editores.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(400).send({message: `${err.message} - Id não encontrado`})
            } else {
                res.status(200).send({message: `Editor atualizado com sucesso`})
            }
        })
    }
}

export default EditorController;