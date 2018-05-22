const database = require('./connection')

module.exports = {
  list() {
    return database('wines')
      .select()
  },
  read(id) {
    return database('wines')
      .select()
      .where('id', id)
      .first()
  },
  create(wine) {
    return database('wines')
      .insert(wine)
      .returning('*')
      .then(record => record[0])
  },
  update(id, wine) {
    return database('wines')
      .where('id', id)
      .update(wine)
      .returning('*')
      .then(record => record[0])
  },
  delete(id) {
    return database('wines')
      .where('id', id)
      .del()
      .returning('*')
  }
};