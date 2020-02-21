const db = require("../../data/db-config");

module.exports = {
    getProjects,
    getByID,
    getProjectTasks,
    add,
}

function getProjects(){
    return db("projects")
}

function getByID(id){
    return db("projects").where({id}).first();
}

function getProjectTasks(id){
    return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .where("projects.id", id)
    .select("tasks.id",
     "projects.project_name as projectName",
    "projects.project_description as projectDescription",
     "tasks.task_description as description",
     "tasks.task_notes as notes",
     "tasks.completed as completed")
}

function add(project){
    return db("projects")
    .insert(project)
}