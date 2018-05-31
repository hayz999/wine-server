
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pairings', (table) => {
    table.increments()
    table.text('nameOfFood')
    table.text('recipeURL')
    table.text('description')
    table.integer('wines_id')
      .notNullable()
      .references('id')
      .inTable('wines')
      .onDelete('CASCADE')
      .index()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pairings')
}
