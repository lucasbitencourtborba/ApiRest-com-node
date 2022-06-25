import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        editora: {type: String, required: true},
    },
    {
        versionKey: false
    }
)

const editores = mongoose.model('editoras', editoraSchema)

export default editores