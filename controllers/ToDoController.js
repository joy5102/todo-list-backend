const ToDoModel = require('../models/TodoModel')

//this will give us all the todos
module.exports.getToDo = async (req, res) => {
    try {
        const todos = await ToDoModel.find();
        console.log(todos); // Log the todos to the console
        res.send(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

//adding new todos
module.exports.saveToDo = async (req, res) => {
    const { text } = req.body
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added data successfully")
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated successfully..."))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted successfully..."))
        .catch((err) => console.log(err))
}