const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bsingharnav:Hardnfast%40145@cluster0.2y5m0pk.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}