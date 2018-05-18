
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', (table) => {
    table.increments()
    table.text('name')
    table.integer('vintage')
    table.text('varietal')
    table.text('winery')
    table.text('location')
    table.text('notes')
    table.float('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wines')
};
