
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', (table) => {
    table.increments()
    table.text('name')
    table.text('vintage')
    table.text('varietal')
    table.text('winery')
    table.text('location')
    table.text('notes')
    table.text('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wines')
};
