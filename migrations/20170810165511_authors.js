exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
