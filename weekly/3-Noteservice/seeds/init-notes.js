exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, user_id: 1, context: 'Here what you typed!'},
        {id: 2, user_id: 1, context: 'Hello world! You fucking bitch!'},
      ]);
    });
};

