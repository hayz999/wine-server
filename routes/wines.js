const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/', (req, res, next) => {
  queries.list().then(wines => {
     res.json({wines});
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  queries.read(req.params.id).then(wine => {
    wine ?  res.json({wine}) : res.status(404).json({message: 'Not Found'})
  }).catch(next)
});

router.post('/', (req, res, next) => {
  queries.create(req.body).then(wine =>{
    res.status(201).json({wine: wine})
  }).catch(next)
});

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id, req.body).then(() => {
    res.status(204).json({deleted: true})
  }).catch(next)
});

router.put('/:id', (req, res, next) => {
  queries.update(req.params.id, req.body).then(wine => {
     res.json({wine: wine[0]});
  }).catch(next)
});

module.exports = router;