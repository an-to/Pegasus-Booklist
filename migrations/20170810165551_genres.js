exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('genres', (table) => {
    table.increments('id')
    table.string('genre')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('genres')
};
