
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
      tbl.increments();
      tbl.string("projectName").notNullable().index();
      tbl.string("project_description", 255);
      tbl.boolean("completed").notNullable().defaultTo(false)
  })
  .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource_name", 255).notNullable().index().unique();
      tbl.string("resource_description",255)
  })
  .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("tasks_description",255).notNullable();
      tbl.string("notes");
      tbl.boolean("completed").defaultTo(false)
      tbl.integer("projectID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })

  .createTable("project_resources", tbl => {
      tbl.increments();

      tbl.integer("projectID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

      tbl.integer("resourceID")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.scheme
  .dropTableIfExists("project_resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
