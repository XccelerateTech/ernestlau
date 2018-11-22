
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transcations').del()
    .then(function () {
      // Inserts seed entries
      return knex('transcations').insert([
        {id: 1, amount: 340, card_id:1, account_id:1},
        {id: 2, amount: 20, card_id:2, account_id:1},
        {id: 3, amount: 5200, card_id:3, account_id:2},
      ]);
    });
};
