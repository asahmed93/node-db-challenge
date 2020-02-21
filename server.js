const express = require('express');

const ProjectRouter = require('./routers/projects/project-router');

const ResourceRouter = require("./routers/resources/resource-router");

const TaskRouter = require("./routers/tasks/task-router");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Success")
});

server.use('/api/projects', ProjectRouter);

server.use('/api/resources', ResourceRouter);

server.use('/api/tasks', TaskRouter);



module.exports = server;