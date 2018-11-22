
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, type:"Mastercard", account_id:1},
        {id: 2, type:"JCB", account_id:1},
        {id: 3, type:"Visa", account_id:2}
      ]);
    });
};
