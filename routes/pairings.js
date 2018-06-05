const express = require('express')
const router = express.Router()
const knex = require('../connection')

const queries = require('../queries2')

router.get('/', (req, res, next) => {
  queries.list().then(pairings => {
    res.json({ pairings });
  }).catch(next);
})

router.get('/:id/wines', (req, res, next) => {
  knex('wines')
    .innerJoin('pairings', 'wines.id', 'pairings.wines_id')
    .where('wines.id', req.params.id)
    .then(result => res.json(result))
    .catch((err) => {
      next(err);
    });
  });

router.post('/', (req, res, next) => {
  queries.create(req.body).then(pairing => {
    res.status(201).json({ pairing: pairing })
  }).catch(next)
})

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.status(200).json({ deleted: true })
  }).catch(next)
});

module.exports = router;