import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://alura:alura123@cluster0.hfiax.mongodb.net/biblioteca")

let db = mongoose.connection

export default db