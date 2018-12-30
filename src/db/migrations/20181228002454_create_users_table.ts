/* tslint:disable only-arrow-functions space-before-function-paren */
import Knex from 'knex';

exports.up = function(knex: Knex, Promise: Promise<any>) {
  return knex.schema
    .dropTable('users')
    .createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('age').defaultTo(0);
      table.timestamps();
    });
};

exports.down = function(knex: Knex, Promise: Promise<any>) {
  return knex.schema.dropTable('users');
};
