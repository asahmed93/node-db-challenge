const express = require('express');

const projects = require('./project-model');

const router = express.Router()

router.get('/', (req, res) => {
    projects.getProjects()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch( () => {
        res.status(500).json({message: 'Cannot get projects'})
    })
})

router.get("/:id", (req,res) => {
    projects.getByID(req.params.id)
    .then(project => {
        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json({message: "PROJECT NOT FOUND"})
        }
    })
    .catch(() => {
        res.status(500).json({message: "Cannot find project"})
    })
})

router.get("/:id/tasks", (req,res) => {
    const id = req.params.id
    console.log(id)
    projects.getProjectTasks(id)
    .then(tasks => {
        if(tasks){
            res.status(200).json(tasks)
        } else {
            res.status(404).json({ message: 'cannot find the tasks of this project'})
        }
    })
    .catch(()=> {
        res.status(500).json({message: 'Failed to get projects tasks'})
    })
})

router.post('/', (req, res) => {
    const projectBody = req.body

    projects.add(projectBody)
    .then( newProject => {
        res.status(201).json(newProject)
    })
    .catch(() => {
        res.status(500).json({ message: 'Cannot add Project'})
    })
})

module.exports = router;