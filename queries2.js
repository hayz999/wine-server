const database = require('./connection')

module.exports = {
  list() {
    return database('pairings')
      .select()
  },
  read(id) {
    return database('pairings')
      .select()
      .where('id', id)
      .first()
  },
  create(pairing) {
    return database('pairings')
      .insert(pairing)
      .returning('*')
      .then(record => record[0])
  },
  update(id, pairing) {
    return database('pairings')
      .where('id', id)
      .update(pairing)
      .returning('*')
      .then(record => record[0])
  },
  delete(id) {
    return database('pairings')
      .where('id', id)
      .del()
      .returning('*')
  }
}