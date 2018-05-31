
exports.seed = function(knex, Promise) {
  return knex('pairings').del()
    .then(function () {
      return knex('pairings').insert([
        {
          id: 1, 
          nameOfFood: 'Chocolate Cake', 
          recipeURL: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/',
          description: 'Pairs well with the tanins in this wine',
          wines_id: 1
          }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE pairings_id_seq RESTART WITH 4;');
    });
};
