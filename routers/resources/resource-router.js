const express =require('express')

const resource = require("./resource-model")

const router = express.Router()

router.get('/', (req,res) => {
    resource.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch( err => {
            res.status(500).json({ message: 'Cannot get resources'})
    })
})

router.get('/:id', (req,res) => {
    resource.getByID(req.params.id)
    .then(resource => {
        if(resource){
            res.json(resource)
        } else {
            res.status(404).json({ message: 'ID NOT FOUND'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Cannot find resource'})
    })
})

router.post("/", (req,res) => {
    resource.add(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(()=> {
        res.status(500).json({ message: "Cannot add resource"})
    })
})

module.exports = router;