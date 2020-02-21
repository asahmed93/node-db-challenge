const db = require("../../data/db-config");

module.exports = {
    getProjects,
    getByID,
    getProjectTasks,
    add
}

function getProjects(){
    return db("projects")
}

function getByID(id){
    console.log(id)
    return db("projects").where({id}).first();
}

function getProjectTasks(id){
    return db("tasks as t")
    .join("projects a p", "t.projectID", "p.id")
    .where("id", id)
    .select(
    "t.*",
    "p.projectName",
    "p.project_description",
    )
}

function add(project){
    const {projectName} = project
    
    return db("projects")
    .insert({projectName})
}