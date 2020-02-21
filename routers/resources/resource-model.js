const db = require("../../data/db-config")

module.exports = {
    getResources,
    getByID,
    add,
}

function getResources(){
    return db("resources");
}

function getByID(id){
    return db("resources").where({id}).first();
}

function add(resource){
    return db("resources")
    .insert(resource, "id")
}