
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, username: 'Peter', active: true},
        {id: 2, username: 'Cindy', active: true},
        {id: 3, username: 'Mary', active: true}
      ]);
    });
};
