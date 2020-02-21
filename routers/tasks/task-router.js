const express = require('express')

const task = require("./task-model")

const router = express.Router()

router.get('/', (req, res) => {
    task.getTasks()
    .then( tasks => {
        res.status(200).json(tasks)
    })
    .catch( () => {
        res.status(500).json({message: 'Cannot get projects'})
    })
})


router.post("/", (req, res) => {
    task.add(req.body)
    .then(newTask => {
        res.status(200).json(newTask)
    })
    .catch(() => {
        res.status(500).json({message: "Cannot add Task"})
    })
})


module.exports = router;