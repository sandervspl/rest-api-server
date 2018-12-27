
exports.up = function(knex, Promise) {
  return knex.schema
    .dropTable('users')
    .createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('age').defaultTo(0);
      table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
