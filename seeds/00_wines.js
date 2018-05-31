
exports.seed = function(knex, Promise) {
  return knex('wines').del()
    .then(function () {
      return knex('wines').insert([
        {
          id: 1, 
          name: 'Reginato Celestina Sparkling Rosé',
          vintage: 2015,
          varietal: 'Malbec Rose',
          winery: 'Reginato Celestina',
          location: 'Spain',
          notes: 'Malbec grapes give this sparkling rosé great color and character. Toasty-yeasty aromas meet delicious homemade strawberry-rhubarb pie flavors. Crisp and refreshing with jst a hint of tannin structure, floral spice, and an amazing elegant finish to round out the mouth.',
          rating: 80
        }
      ])
    }).then(() => {
      return knex.raw('ALTER SEQUENCE wines_id_seq RESTART WITH 4;');
    });
};
