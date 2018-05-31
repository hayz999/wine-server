const express = require('express');
const router = express.Router();
const knex = require('../connection')

const queries = require('../queries');

router.get('/', (req, res, next) => {
  console.log('here!');
  
  return knex('pairings').select()
    .then(pairings => {
      console.log('another here!');
      
      res.json({pairings});
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

module.exports = router;